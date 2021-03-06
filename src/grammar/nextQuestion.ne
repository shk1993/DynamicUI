# The entry point. We will always either have a nextQuestion, or a condition to retrieve the next question
Next -> NextQuestion 						              {% d => ({type: 'nextQuestion', value: d[0].QID}) %}
	| TernaryOperation						              {% d => ({type: 'conditional', value: d[0]}) %}
	| "[" NextQuestion ("," NextQuestion):* "]"	{% d => ({type: 'nextQuestion', value: params(d)}) %}

# NextQuestions are made up of only the Q ids, or a modifier prepended to that id
NextQuestion -> QID 						              {% d => ({QID: {modifier: null, QID: d[0].QID}}) %}
	| Modifier QID				                			{% d => ({QID: {modifier: d[0].mod, QID: d[1].QID}}) %}

# Question Modifiers
Modifier -> "+" 							                {% d => ({mod: d[0]}) %}
	| "_"								                      	{% d => ({mod: d[0]}) %}

# The ternary operation is the simple ternary operation in most languages. condition ? true : false
TernaryOperation -> Condition "?" NextQuestion ":" NextQuestion		{% d => ({ condition: d[0], trueNextQuestion: {type: 'nextQuestion', value: d[2].QID }, falseNextQuestion: {type: 'nextQuestion', value: d[4].QID}}) %}
	| Condition "?" TernaryOperation ":" NextQuestion								{% d => ({ condition: d[0], trueNextQuestion: {type: 'ternaryOperation', value: d[2]}, falseNextQuestion: {type: 'nextQuestion', value: d[4].QID}}) %}
	| Condition "?" NextQuestion ":" TernaryOperation								{% d => ({ condition: d[0], trueNextQuestion: {type: 'nextQuestion', value: d[2].QID}, falseNextQuestion: {type: 'ternaryOperation', value: d[4]}}) %}
	| Condition "?" TernaryOperation ":" TernaryOperation						{% d => ({ condition: d[0], trueNextQuestion: {type: 'ternaryOperation', value: d[2]}, falseNextQuestion: {type: 'ternaryOperation', value: d[4]}}) %}

# Conditions can be a simple value=value, value.isEmpty, or an array of those conditions joined by an &
Condition -> Condition "&" Condition		      {% d => [d[0][0], d[2][0]] %}	
	| ConditionEval Expression AID	        		{% d => [{condEval: d[0].condEval, expr: d[1].exp, AID: d[2].AID}] %}
	| ConditionEval "." "isEmpty"		        		{% d => [{condEval: d[0].condEval, expr: d[2]}] %}

# The section to evaluate for a value in the condition
ConditionEval -> "{" StateValue "}"			      {% d => ({condEval: d[1]}) %}

# The value to retrieve from the frontend state
StateValue -> State "." QID				          {% d => ({state: d[0].state, QID: d[2].QID}) %}

# The front end state to pull the value from
State ->  "flow" 							                {% d => ({state: d[0]}) %}
	| "loop"							                  		{% d => ({state: d[0]}) %}
	| "history"							                		{% d => ({state: d[0]}) %}

# == for comparison
Expression -> "=="							              {% d => ({exp: d[0]}) %}

# QID
QID -> "Q" int							                {% d => ({QID: d[0] + d[1].int.join('')}) %}
	|	"specs"																	{% d => ({QID: d[0]}) %}
	|	"moreLE"																	{% d => ({QID: d[0]}) %}
	| "STOP"																		{% d => ({QID: d[0]}) %}
	| "review"																	{% d => ({QID: d[0]}) %}
	| Function																	{% d => ({QID: d[0]}) %}
			
Function -> "{" StateValue "}" "." FnName			{% d => ({type: 'function', state: d[1], function: d[4]}) %}
FnName -> "pop"																{% d => d[0] %}

# AID
AID -> "A" int								                {% d => ({AID: d[0] + d[1].int.join('')}) %}

# 1 or more numbers
int -> [0-9]:+								                {% d => ({int: d[0]}) %}

@{%
const flattenDeep = arr => arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
const params = arr => flattenDeep(arr).filter(v => v !== null && v !== "[" && v !== "]" && v !== ",");
%}
