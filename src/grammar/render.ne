# The start of the render grammar
Render  ->  Component ("&" Component):*           {% components %}

# Each component list
Component   ->  CompType "(" Attributes ")"       {% d => ({ component: d[0].component, attributes: d[2].attributes }) %}
            |   CompType                          {% d => ({ component: d[0].component, attributes: null }) %}

# A component can only be one of these listed below
CompType    ->  "datepicker"                      {% d => ({ component: d[0] }) %}
            |   "textbox"                         {% d => ({ component: d[0] }) %}
            |   "textarea"                        {% d => ({ component: d[0] }) %}
            |   "radio"                           {% d => ({ component: d[0] }) %}
            |   "checkbox"                        {% d => ({ component: d[0] }) %}
            |   "dropdown"                        {% d => ({ component: d[0] }) %}
            |   "review"                          {% d => ({ component: d[0] }) %}
		      	|   "fieldarray"                      {% d => ({ component: d[0] }) %}

# One or more attribute list, separated by commas
Attributes  ->  Attribute (("," _) Attribute):*   {% attributes %}

# Attributes are key: value pairs
Attribute   ->  AttrType (":" _) AttrValue        {% d => ({ key: d[0].key, value: d[2].value }) %}

# The type is an alpha numeric string
AttrType    ->  [a-zA-Z0-9]:+                     {% d => ({ key: d[0].join('') }) %}

# The value is alpha numeric and some special characters for regexes
AttrValue   ->  [a-zA-Z0-9\/\{\}\(\)\,\\\^\[\]\"+?.*\$]:+   {% d => ({ value: d[0].join('') }) %}
#AttrValue   ->  [.]:+                {% d => ({ value: d[0].join('') }) %}

# Whitespace. The important thing here is that the postprocessor
# is a null-returning function. This is a memory efficiency trick.
_			      ->	[\s]:*                            {% d => null %}

@{%
const flatten = arr => arr.reduce(
  (a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []
);

const attributes = d => ({
  attributes: flatten(d).filter((value, i) => i % 3 === 0)
});

const components = d => (
  flatten(d).filter((value, i) => i % 2 === 0).map(value => (
	  { component: value.component, attributes: value.attributes }
  ))
);
%}