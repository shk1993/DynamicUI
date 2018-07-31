/* tslint:disable */

export default {
  Q01: {
    key: 'Q01',
    render: 'textbox(required:true)',
    text: 'Please enter your full name:',
    answers: {
      noKey: {
        key: 'noKey',
        text: null,
        nextQuestion: 'Q30',
      },
    },
  },
  Q30: {
    key: 'Q30',
    render: 'datepicker(required:true)',
    text: 'Tell us the time around which you are planning to buy a vehicle?',
    answers: {
      noKey: {
        key: 'noKey',
        text: null,
        nextQuestion: 'Q3',
      },
    },
  },
  Q3: {
    key: 'Q3',
    render: 'radio(required:true)',
    text: 'What kind of vehicle are you planning to buy?',
    answers: {
      A3: {
        key: 'A3',
        text: '2-Wheelers',
        nextQuestion: 'Q9',
      },
      A6: {
        key: 'A6',
        text: '4-Wheelers',
        nextQuestion: 'Q9',
      },
    },
  },
  Q9: {
    key: 'Q9',
    render: 'textbox(required:true)',
    text: 'What is your budget? :',
    answers: {
      noKey: {
        key: 'noKey',
        text: null,
        nextQuestion: '{history.Q3}==A3?Q106:Q105',
      },
    },
  },
  Q105: {
    key: 'Q105',
    text: 'Select the sub-categories of the 4-wheelers you are interested in: ',
    render: 'checkbox(required:true)',
    answers: {
      A3033: {
        key: 'A3033',
        text: 'Hatchback',
        nextQuestion: 'specs',
      },
      A3009: {
        key: 'A3009',
        text: 'Sedan',
        nextQuestion: 'specs',
      },
      A3012: {
        key: 'A3012',
        text: 'SUV',
        nextQuestion: 'specs',
      },
      A3015: {
        key: 'A3015',
        text: 'Crossover',
        nextQuestion: 'specs',
      },
      A3018: {
        key: 'A3018',
        text: 'Convertible',
        nextQuestion: 'specs',
      },
      A66: {
        key: 'A66',
        text: 'Other: Please specify',
        nextQuestion: 'specs',
        child: 'otherQ105',
      },
    },
  },
  Q106: {
    key: 'Q106',
    text: 'Select the sub-categories of the 2-wheelers you are interested in: ',
    render: 'checkbox(required:true)',
    answers: {
      A3033: {
        key: 'A3033',
        text: 'Standard motorcycles',
        nextQuestion: 'specs',
      },
      A3009: {
        key: 'A3009',
        text: 'Sports bike',
        nextQuestion: 'specs',
      },
      A3012: {
        key: 'A3012',
        text: 'Cruiser',
        nextQuestion: 'specs',
      },
      A3015: {
        key: 'A3015',
        text: 'Scooters',
        nextQuestion: 'specs',
      },
      A3018: {
        key: 'A3018',
        text: 'Mopeds',
        nextQuestion: 'specs',
      },
      A66: {
        key: 'A66',
        text: 'Other: Please specify',
        nextQuestion: 'specs',
        child: 'otherQ105',
      },
    },
  },
  otherQ105: {
    key: 'otherQ105',
    text: '',
    render: 'textbox(required:true)',
    answers: {
      noKey: {
        key: 'noKey',
        text: null,
      },
    },
  },
  specs: {
    key: 'specs',
    text: '‭Do you have any specifications for the vehicle?‬',
    render: 'fieldarray(children:[Q112,Q113], required:true)',
    answers: {
      noKey: {
        key: 'noKey',
        text: null,
        nextQuestion: 'Q21',
      },
    },
  },
  Q112: {
    key: 'Q112',
    text: 'What is the name of the part?',
    render: 'textbox(required:true)',
    answers: {
      noKey: {
        key: 'noKey',
        text: null,
        nextQuestion: 'Q113',
      },
    },
  },
  Q113: {
    key: 'Q113',
    text: 'What is the specifications needed? ',
    render: 'textbox(required:true)',
    answers: {
      noKey: {
        key: 'noKey',
        text: null,
        nextQuestion: 'moreLE',
      },
    },
  },
};
