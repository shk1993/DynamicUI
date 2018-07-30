/* tslint:disable */

export default {
  DE01: {
    key: 'DE01',
    render: 'textbox(required:true)',
    text: 'Please enter your full name:',
    answers: {
      noKey: {
        key: 'noKey',
        text: null,
        nextQuestion: 'DE30',
      },
    },
  },
  DE30: {
    key: 'DE30',
    render: 'datepicker(required:true)',
    text: 'Tell us the time around which you are planning to buy a vehicle?',
    answers: {
      noKey: {
        key: 'noKey',
        text: null,
        nextQuestion: 'DE3',
      },
    },
  },
  DE3: {
    key: 'DE3',
    render: 'radio(required:true)',
    text: 'What kind of vehicle are you planning to buy?',
    answers: {
      A3: {
        key: 'A3',
        text: '2-Wheelers',
        nextQuestion: 'DE9',
      },
      A6: {
        key: 'A6',
        text: '4-Wheelers',
        nextQuestion: 'DE9',
      },
    },
  },
  DE9: {
    key: 'DE9',
    render: 'textbox(required:true)',
    text: 'What is your budget? :',
    answers: {
      noKey: {
        key: 'noKey',
        text: null,
        nextQuestion: '{history.DE3}==A3?DE106:DE105',
      },
    },
  },
  DE105: {
    key: 'DE105',
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
        child: 'otherDE105',
      },
    },
  },
  DE106: {
    key: 'DE106',
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
        child: 'otherDE105',
      },
    },
  },
  otherDE105: {
    key: 'otherDE105',
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
    render: 'fieldarray(children:[DE112,DE113], required:true)',
    answers: {
      noKey: {
        key: 'noKey',
        text: null,
        nextQuestion: 'DE21',
      },
    },
  },
  DE112: {
    key: 'DE112',
    text: 'What is the name of the part?',
    render: 'textbox(required:true)',
    answers: {
      noKey: {
        key: 'noKey',
        text: null,
        nextQuestion: 'DE113',
      },
    },
  },
  DE113: {
    key: 'DE113',
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
  /*
  DE534: {
    key: 'DE534',
    text:
      'Which of the following best characterizes the type of HIT system or device related to the event?',
    render: 'radio(required:true)',
    answers: {
      A2316: {
        key: 'A2316',
        text:
          'Administrative/billing or practice management system (e.g., master patient index, registration/appointment scheduling system, coding/billing system)',
        nextQuestion: 'DE81',
      },
      A2322: {
        key: 'A2322',
        text:
          'Electronic health record (EHR) or component of EHR (e.g., CPOE system, pharmacy system, e-MAR, clinical documentation system, [CDS])',
        nextQuestion: 'DE81',
      },
      A2311: {
        key: 'A2311',
        text:
          'Radiology/diagnostic imaging system, including picture archiving and communications system (PACS)',
        nextQuestion: 'DE81',
      },
      A2328: {
        key: 'A2328',
        text:
          'Laboratory information system (LIS), including microbiology, and pathology systems',
        nextQuestion: 'DE81',
      },
      A2319: {
        key: 'A2319',
        text: 'Automated dispensing system',
        nextQuestion: 'DE81',
      },
      A2325: {
        key: 'A2325',
        text:
          'Human interface device (e.g., keyboard, mouse, touchscreen, speech recognition system, monitor/display, printer)',
        nextQuestion: 'DE81',
      },
      A66: {
        key: 'A66',
        text: 'Other: Please specify',
        nextQuestion: 'DE81',
        child: 'otherDE534',
      },
    },
  },
  DE81: {
    key: 'DE81',
    text: 'Who first reported the event or unsafe condition?',
    render: 'radio(required:true)',
    answers: {
      A288: {
        key: 'A288',
        text: 'Healthcare professional‬',
        nextQuestion: 'DE84',
      },
      A291: {
        key: 'A291',
        text:
          'Healthcare worker, including nursing assistant, patient transport/retrieval personnel, assistant/orderly, clerical/administrative personnel, interpreter/translator, technical/laboratory personnel, pastoral care personnel, biomedical engineer, housekeeping, maintenance, patient care assistant, or administrator/manager',
        nextQuestion: '{history.DE3}==A3?DE21:numOfLE',
      },
      A294: {
        key: 'A294',
        text:
          'Emergency service personnel, including police officer, fire fighter, or other emergency service officer',
        nextQuestion: '{history.DE3}==A3?DE21:numOfLE',
      },
      A297: {
        key: 'A297',
        text: 'Patient, family member, volunteer, caregiver, or home assistant',
        nextQuestion: '{history.DE3}==A3?DE21:numOfLE',
      },
      UNK: {
        key: 'UNK',
        text: 'Unknown',
        nextQuestion: '{history.DE3}==A3?DE21:numOfLE',
      },
    },
  },
  DE84: {
    key: 'DE84',
    text: '‭What type of healthcare professional made the initial report? ‬',
    render: 'radio(required:true)',
    answers: {
      A303: {
        key: 'A303',
        text: 'Doctor, dentist (including student)‬',
        nextQuestion: '{history.DE3}==A3?DE21:numOfLE',
      },
      A306: {
        key: 'A306',
        text:
          'Nurse, nurse practitioner, physician assistant (including student or trainee)‬',
        nextQuestion: '{history.DE3}==A3?DE21:numOfLE',
      },
      A309: {
        key: 'A309',
        text: 'Pharmacist, pharmacy technician (including student) ‬',
        nextQuestion: '{history.DE3}==A3?DE21:numOfLE',
      },
      A312: {
        key: 'A312',
        text:
          'Allied health professional (including paramedic, speech, physical and occupational therapist, dietician)',
        nextQuestion: '{history.DE3}==A3?DE21:numOfLE',
      },
    },
  },
  DE21: {
    key: 'DE21',
    text:
      'Which of the following categories are associated with the event or unsafe condition?',
    render: 'checkbox(required:true)',
    answers: {
      A41: {
        key: 'A41',
        text: 'Anestheia',
        nextQuestion: '+DE2006',
      },
      A45: {
        key: 'A45',
        text: 'Device or Medical/Surgical Supply',
        nextQuestion: '+DE141',
      },
      A61: {
        key: 'A61',
        text: 'Surgery, includes invasive procedure',
        nextQuestion: '+DE513',
      },
      A60: {
        key: 'A60',
        text: 'Pressure injury',
        nextQuestion: '+DE408',
      },
      A42: {
        key: 'A42',
        text: 'Blood or Blood Product',
        nextQuestion: '+DE114',
      },
      A48: {
        key: 'A48',
        text: 'Fall',
        nextQuestion: '+DE192',
      },
      A51: {
        key: 'A51',
        text: 'Healthcare-associated Infection‬',
        nextQuestion: '+review',
      },
      A54: {
        key: 'A54',
        text: 'Medication or Other Substance',
        nextQuestion: '+DE270',
      },
      A57: {
        key: 'A57',
        text: 'Perinatal',
        nextQuestion: '+DE363',
      },
      A64: {
        key: 'A64',
        text: 'Venous Thromboembolism',
        nextQuestion: '+DE1003',
      },
      A66: {
        key: 'A66',
        text: 'Other: Please specify',
        nextQuestion: '+DE47',
        child: 'otherDE21',
      },
    },
  },
  numOfLE: {
    key: 'numOfLE',
    text: '‭Do you have any linked events‬',
    render: 'fieldarray(children:[DE112,DE113], required:true)',
    answers: {
      noKey: {
        key: 'noKey',
        text: null,
        nextQuestion: 'DE21',
      },
    },
  },
  moreLE: {
    key: 'moreLE',
    text: 'Are there any additional linked events',
    render: 'radio(required:true)',
    answers: {
      YES: {
        key: 'YES',
        text: 'YES',
        nextQuestion: 'DE112',
      },
      NO: {
        key: 'NO',
        text: 'NO',
        nextQuestion: 'DE21',
      },
    },
  },
  DE2006: {
    key: 'DE2006',
    text: 'What type(s) of anesthesia and/or sedation was used?',
    render: 'checkbox',
    answers: {
      noKey: {
        key: 'noKey',
        text: null,
        nextQuestion: 'DE522',
      },
      A1972: {
        key: 'A1972',
        text: 'Sedation',
        nextQuestion: 'DE522',
      },
      A1965: {
        key: 'A1965',
        text: 'General anesthesia',
        nextQuestion: 'DE522',
      },
      A1968: {
        key: 'A1968',
        text:
          'Regional anesthesia (e.g., epidural, spinal, or peripheral nerve blocks)',
        nextQuestion: 'DE522',
      },
      A1971: {
        key: 'A1971',
        text: 'Local or topical anesthesia',
        nextQuestion: 'DE522',
      },
    },
  },
  DE522: {
    key: 'DE522',
    text: 'Which of the following best characterizes the anesthesia event?',
    render: 'radio(required:true)',
    answers: {
      A2248: {
        key: 'A2248',
        text: 'Physiologic complication not present prior to anesthesia',
        nextQuestion: 'DE2000',
      },
      A2244: {
        key: 'A2244',
        text: 'Awareness (during general anesthesia)‬',
        nextQuestion: '{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
      },
      A2235: {
        key: 'A2235',
        text: 'Dental injury',
        nextQuestion: '{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
      },
      A2238: {
        key: 'A2238',
        text: 'Ocular injury',
        nextQuestion: '{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
      },
      A2241: {
        key: 'A2241',
        text: 'Peripheral nerve injury',
        nextQuestion: '{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
      },
      A2256: {
        key: 'A2256',
        text: 'Difficulty managing airway',
        nextQuestion: 'DE525',
      },
      A66: {
        key: 'A66',
        text: 'Other: Please Specify',
        nextQuestion: '{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
      },
    },
  },
  DE2000: {
    key: 'DE2000',
    text:
      'Which of the following physiologic complication(s) occurred that was not present prior to anesthesia?',
    render: 'checkbox',
    answers: {
      noKey: {
        key: 'noKey',
        text: null,
        nextQuestion: '{loop.DE21}.isEmpty?_review:_{loop.DE21}.pop',
      },
      A2088: {
        key: 'A2088',
        text: 'Cardiac or circulatory event',
        nextQuestion: '{loop.DE21}.isEmpty?_review:_{loop.DE21}.pop',
      },
      A2091: {
        key: 'A2091',
        text: 'Central nervous system event',
        nextQuestion: '{loop.DE21}.isEmpty?_review:_{loop.DE21}.pop',
      },
      A2094: {
        key: 'A2094',
        text: 'Renal failure, impairment, or insufficiency',
        nextQuestion: '{loop.DE21}.isEmpty?_review:_{loop.DE21}.pop',
      },
      A2095: {
        key: 'A2095',
        text: 'Respiratory failure',
        nextQuestion: 'DE2003',
      },
      A66: {
        key: 'A66',
        text: 'Other: Please specify',
        nextQuestion: '{loop.DE21}.isEmpty?_review:_{loop.DE21}.pop',
      },
    },
  },
  DE2003: {
    key: 'DE2003',
    text:
      'Which of the following best describes how the respiratory failure was manifested?',
    render: 'radio',
    answers: {
      noKey: {
        key: 'noKey',
        text: null,
        nextQuestion: '{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
      },
      A1972: {
        key: 'A1972',
        text: 'Sedation',
        nextQuestion: '{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
      },
      A1965: {
        key: 'A1965',
        text: 'General anesthesia',
        nextQuestion: '{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
      },
      A1968: {
        key: 'A1968',
        text:
          'Regional anesthesia (e.g., epidural, spinal, or peripheral nerve blocks)',
        nextQuestion: '{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
      },
      A1971: {
        key: 'A1971',
        text: 'Local or topical anesthesia',
        nextQuestion: '{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
      },
    },
  },
  DE525: {
    key: 'DE525',
    text:
      'Which of the following best characterizes the difficulty managing the airway?',
    render: 'radio',
    answers: {
      noKey: {
        key: 'noKey',
        text: null,
        nextQuestion: '{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
      },
      A2262: {
        key: 'A2262',
        text: 'Difficulty during tracheal intubation‬',
        nextQuestion: '{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
      },
      A2265: {
        key: 'A2265',
        text: 'Difficulty maintaining airway during procedure‬',
        nextQuestion: '{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
      },
      A2268: {
        key: 'A2268',
        text: 'Esophageal intubation‬',
        nextQuestion: '{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
      },
      A2271: {
        key: 'A2271',
        text:
          'Re-intubation, following extubation, in the operating or recovery room‬',
        nextQuestion: '{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
      },
      A66: {
        key: 'A66',
        text: 'Other: Please specify',
        nextQuestion: '{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
      },
    },
  },
  DE114: {
    key: 'DE114',
    text:
      'What type of blood or blood product was involved in the event or unsafe condition?',
    render: 'radio',
    answers: {
      noKey: {
        key: 'noKey',
        text: null,
        nextQuestion:
          '{history.DE3}==A9?{loop.DE21}.isEmpty?review:{loop.DE21}.pop:DE123',
      },
      A544: {
        key: 'A544',
        text: 'Hematopoietic stem cells',
        nextQuestion:
          '{history.DE3}==A9?{loop.DE21}.isEmpty?review:{loop.DE21}.pop:DE123',
      },
      A531: {
        key: 'A531',
        text: 'Whole blood',
        nextQuestion:
          '{history.DE3}==A9?{loop.DE21}.isEmpty?review:{loop.DE21}.pop:DE123',
      },
      A534: {
        key: 'A534',
        text: 'Red blood cells',
        nextQuestion:
          '{history.DE3}==A9?{loop.DE21}.isEmpty?review:{loop.DE21}.pop:DE123',
      },
      A537: {
        key: 'A537',
        text: 'Platelets',
        nextQuestion:
          '{history.DE3}==A9?{loop.DE21}.isEmpty?review:{loop.DE21}.pop:DE123',
      },
      A540: {
        key: 'A540',
        text: 'Plasma',
        nextQuestion:
          '{history.DE3}==A9?{loop.DE21}.isEmpty?review:{loop.DE21}.pop:DE123',
      },
      A543: {
        key: 'A543',
        text: 'Cryoprecipitate',
        nextQuestion:
          '{history.DE3}==A9?{loop.DE21}.isEmpty?review:{loop.DE21}.pop:DE123',
      },
      A546: {
        key: 'A546',
        text: 'Granulocytes',
        nextQuestion:
          '{history.DE3}==A9?{loop.DE21}.isEmpty?review:{loop.DE21}.pop:DE123',
      },
      A549: {
        key: 'A549',
        text: 'Lymphocytes',
        nextQuestion:
          '{history.DE3}==A9?{loop.DE21}.isEmpty?review:{loop.DE21}.pop:DE123',
      },
      A66: {
        key: 'A66',
        text: 'Other: Please specify',
        nextQuestion:
          '{history.DE3}==A9?{loop.DE21}.isEmpty?review:{loop.DE21}.pop:DE123',
      },
    },
  },
  DE123: {
    key: 'DE123',
    text:
      'What incorrect action was involved in processing or administering the blood or blood product?',
    render: 'checkbox', // TODO: Need to verify render type (radio or checkbox?)
    answers: {
      noKey: {
        key: 'noKey',
        text: null,
        nextQuestion: '{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
      },
      A591: {
        key: 'A591',
        text:
          'Incorrect product (e.g., product not irradiated when it was ordered or red blood cells given when plasma was ordered)',
        nextQuestion: '{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
      },
      A597: {
        key: 'A597',
        text: 'Use of expired or unacceptably stored product(s)',
        nextQuestion: '{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
      },
      A600: {
        key: 'A600',
        text: 'Incorrect volume (e.g., number of  milliliters or units)',
        nextQuestion: '{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
      },
      A585: {
        key: 'A585',
        text: 'Incorrect patient‬',
        nextQuestion: '{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
      },
      A588: {
        key: 'A588',
        text: 'Incorrect ABO/Rh type',
        nextQuestion: '{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
      },
      A594: {
        key: 'A594',
        text: 'Incorrect sequence of administration of products‬',
        nextQuestion: '{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
      },
      A603: {
        key: 'A603',
        text:
          'Incorrect IV fluid (i.e., administered product with incorrect IV fluid)‬',
        nextQuestion: '{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
      },
      A606: {
        key: 'A606',
        text: 'Incorrect timing (e.g., delay in administration)‬',
        nextQuestion: '{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
      },
      A609: {
        key: 'A609',
        text: 'Incorrect rate',
        nextQuestion: '{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
      },
      UNK: {
        key: 'UNK',
        text: 'Unknown',
        nextQuestion: '{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
      },
      A66: {
        key: 'A66',
        text: 'Other: Please specify',
        nextQuestion: '{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
      },
    },
  },
  DE363: {
    key: 'DE363',
    render: 'textbox(required : true)',
    text:
      'Immediately prior to birth, or at the time of the intrauterine procedure (prenatal), what was the best estimate of completed weeks of gestation?',
    answers: {
      noKey: {
        key: 'noKey',
        text: null,
        nextQuestion: 'DE353',
      },
    },
  },
  DE353: {
    key: 'DE353',
    render: 'radio(required : true)',
    text: 'Which of the following did the event involve?',
    answers: {
      A1516: {
        key: 'A1516',
        text: 'Birthing process (labor and delivery)',
        nextQuestion: '{history.DE353}==A1516?DE354:DE354',
      },
      A1517: {
        key: 'A1517',
        text: 'Intrauterine procedure (prenatal)',
        nextQuestion: '{history.DE353}==A1516?DE354:DE354',
      },
      A342: {
        key: 'A342',
        text: 'Other',
        nextQuestion: '{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
        child: 'otherDE353',
      },
      UNK: {
        key: 'UNK',
        text: 'Unknown',
        nextQuestion: '{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
      },
    },
  },
  otherDE353: {
    key: 'otherDE353',
    text: '',
    render: 'textbox(required : true)',
    answers: {
      noKey: {
        key: 'noKey',
        text: null,
      },
    },
  },
  DE354: {
    key: 'DE354',
    render: 'checkbox(required : true)',
    text: 'Who was affected by the perinatal event?',
    answers: {
      A1518: {
        key: 'A1518',
        text: 'Mother',
        nextQuestion: 'DE381',
      },
      A1525: {
        key: 'A1525',
        text: 'Neonate(s)',
        nextQuestion: '_DE399',
      },
      A1519: {
        key: 'A1519',
        text: 'Fetus(es)',
        nextQuestion: '_DE390',
      },
    },
  },
  DE399: {
    key: 'DE399',
    render: 'radio(required : true)',
    text: 'Which adverse outcome(s) did the neonate sustain?',
    answers: {
      A1644: {
        key: 'A1644',
        text: 'Unexpected death',
        nextQuestion: 'DE394',
      },
      A1660: {
        key: 'A1660',
        text: 'Birth trauma/injury ',
        nextQuestion: 'DE394',
      },
      A1662: {
        key: 'A1662',
        text:
          'Five-minute Apgar less than 7 and birthweight greater than 2500 grams',
        nextQuestion: 'DE394',
      },
      A1665: {
        key: 'A1665',
        text: 'Hypoxic ischemic encephalopathy (HIE)',
        nextQuestion: 'DE394',
      },
      A1668: {
        key: 'A1668',
        text: 'Seizure(s)',
        nextQuestion: 'DE394',
      },
      A1671: {
        key: 'A1671',
        text: 'Infection (e.g., group B strep)',
        nextQuestion: 'DE394',
      },
      A66: {
        key: 'A66',
        text: 'Other: Please specify',
        nextQuestion: 'DE394',
        child: 'otherDE399',
      },
    },
  },
  otherDE399: {
    key: 'otherDE399',
    text: '',
    render: 'textbox(required : true)',
    answers: {
      noKey: {
        key: 'noKey',
        text: null,
      },
    },
  },
  DE394: {
    key: 'DE394',
    render: 'textbox(required : true)',
    text: 'What is the Neonate/stillborn birthweight',
    answers: {
      noKey: {
        key: 'noKey',
        text: null,
        nextQuestion: 'DE366',
      },
    },
  },
  DE366: {
    key: 'DE366',
    render: 'radio(required : true)',
    text: 'Was the labor induced or augmented',
    answers: {
      A15: {
        key: 'A15',
        text: 'YES',
        nextQuestion: 'DE372',
      },
      A18: {
        key: 'A18',
        text: 'NO',
        nextQuestion: 'DE372',
      },
      UNK: {
        key: 'UNK',
        text: 'Unknown',
        nextQuestion: 'DE372',
      },
    },
  },
  DE372: {
    key: 'DE372',
    render: 'radio(required : true)',
    text: 'What was the mode of birth',
    answers: {
      200146002: {
        key: '200146002',
        text: 'Cesarean section',
        nextQuestion: 'DE375',
      },
      289259007: {
        key: '289259007',
        text: 'Vaginal Delivery',
        nextQuestion: 'DE375',
      },
      A1569: {
        key: 'A1569',
        text: 'Trial of labor followed by Cesarean birth',
        nextQuestion: 'DE375',
      },
      UNK: {
        key: 'UNK',
        text: 'Unknown',
        nextQuestion: 'DE375',
      },
    },
  },
  DE375: {
    key: 'DE375',
    render: 'radio(required : true)',
    text: 'Was the vaginal birth with instrumentation assistance',
    answers: {
      A15: {
        key: 'A15',
        text: 'YES',
        nextQuestion: '{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
      },
      A18: {
        key: 'A18',
        text: 'NO',
        nextQuestion: '{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
      },
      UNK: {
        key: 'UNK',
        text: 'Unknown',
        nextQuestion: '{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
      },
    },
  },
  DE381: {
    key: 'DE381',
    render: 'checkbox(required : true)',
    text: 'What is the type of maternal adverse outcome',
    answers: {
      A1599: {
        key: 'A1599',
        text: 'Mother',
        nextQuestion:
          '{history.DE354}==A1519?DE390:{history.DE354}==A1525?DE399:{history.DE353}==A1516?DE394:{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
      },
      A1596: {
        key: 'A1596',
        text: 'Death',
        nextQuestion:
          '{history.DE354}==A1519?DE390:{history.DE354}==A1525?DE399:{history.DE353}==A1516?DE394:{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
      },
      A1602: {
        key: 'A1602',
        text: 'Eclampsia',
        nextQuestion:
          '{history.DE354}==A1519?DE390:{history.DE354}==A1525?DE399:{history.DE353}==A1516?DE394:{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
      },
      A1605: {
        key: 'A1605',
        text: 'Magnesium toxicity',
        nextQuestion:
          '{history.DE354}==A1519?DE390:{history.DE354}==A1525?DE399:{history.DE353}==A1516?DE394:{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
      },
      A1608: {
        key: 'A1608',
        text: 'Infection',
        nextQuestion:
          '{history.DE354}==A1519?DE390:{history.DE354}==A1525?DE399:{history.DE353}==A1516?DE394:{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
      },
      A1611: {
        key: 'A1611',
        text: 'Injury to body part, organ',
        nextQuestion:
          '{history.DE354}==A1519?DE390:{history.DE354}==A1525?DE399:{history.DE353}==A1516?DE394:{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
      },
      A66: {
        key: 'A66',
        text: 'Other: Please specify',
        nextQuestion:
          '{history.DE354}==A1519?DE390:{history.DE354}==A1525?DE399:{history.DE353}==A1516?DE394:{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
        child: 'otherDE381',
      },
    },
  },
  otherDE381: {
    key: 'otherDE381',
    text: '',
    render: 'textbox(required : true)',
    answers: {
      noKey: {
        key: 'noKey',
        text: null,
      },
    },
  },
  DE192: {
    key: 'DE192',
    render: 'radio(required : true)',
    text: 'Was the fall unassisted or assisted?',
    answers: {
      A867: {
        key: 'A867',
        text: 'Unassisted',
        nextQuestion: 'DE204',
      },
      A870: {
        key: 'A870',
        text:
          'Assisted (e.g., when patient begins to fall and is assisted to the ground by another person)',
        nextQuestion: 'DE204',
        child: 'assistedFall',
      },
      UNK: {
        key: 'UNK',
        text: 'Unknown',
        nextQuestion: 'DE204',
      },
    },
  },
  DE390: {
    key: 'DE390',
    render: 'radio(required : true)',
    text: 'Type of fetus adverse outcome',
    answers: {
      A1644: {
        key: 'A1644',
        text: 'Unexpected death',
        nextQuestion: '{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
      },
      A1647: {
        key: 'A1647',
        text: 'Injury',
        nextQuestion: '{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
      },
    },
  },
  assistedFall: {
    key: 'assistedFall',
    text: '',
    render: 'textbox(required : true)',
    answers: {
      noKey: {
        key: 'noKey',
        text: null,
      },
    },
  },
  otherDE105: {
    key: 'otherDE105',
    text: '',
    render: 'textbox(required : true)',
    answers: {
      noKey: {
        key: 'noKey',
        text: null,
      },
    },
  },
  DE204: {
    key: 'DE204',
    render: 'radio(required : true)',
    text:
      'What was the most severe type of injury sustained by the patient as a result of the fall?',
    answers: {
      A900: {
        key: 'A900',
        text: 'Dislocation',
        nextQuestion: 'DE210',
      },
      A903: {
        key: 'A903',
        text: 'Fracture',
        nextQuestion: 'DE210',
      },
      A905: {
        key: 'A905',
        text: 'Skin tear, avulsion, hematoma or significant bruising',
        nextQuestion: 'DE210',
      },
      A906: {
        key: 'A906',
        text: 'Intracranial injury',
        nextQuestion: 'DE210',
      },
      A909: {
        key: 'A909',
        text: 'Laceration requiring suturesg',
        nextQuestion: 'DE210',
      },
      A910: {
        key: 'A910',
        text: 'No injury',
        nextQuestion: 'DE210',
      },
      A66: {
        key: 'A66',
        text: 'Other: Please Specify',
        nextQuestion: 'DE210',
        child: 'otherDE204',
      },
    },
  },
  otherDE204: {
    key: 'otherDE204',
    text: '',
    render: 'textbox(required : true)',
    answers: {
      noKey: {
        key: 'noKey',
        text: null,
      },
    },
  },
  otherDE534: {
    key: 'otherDE534',
    text: '',
    render: 'textbox(required : true)',
    answers: {
      noKey: {
        key: 'noKey',
        text: null,
      },
    },
  },
  DE210: {
    key: 'DE210',
    text: 'Prior to the fall, was a fall risk assessment documented?‬',
    render: 'radio(required : true)',
    answers: {
      A15: {
        key: 'A15',
        text: 'YES',
        nextQuestion: 'DE213',
      },
      A18: {
        key: 'A18',
        text: 'NO',
        nextQuestion: '{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
      },
      UNK: {
        key: 'UNK',
        text: 'Unknown',
        nextQuestion: '{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
      },
    },
  },
  DE408: {
    key: 'DE408',
    text:
      'What was the most advanced stage/type of the pressure injury or deep tissue pressure injury (DTPI) being reported? ',
    render: 'radio(required : true)',
    answers: {
      A1698: {
        key: 'A1698',
        text: 'Stage 1',
        nextQuestion: '{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
      },
      A1701: {
        key: 'A1701',
        text: 'Stage 2',
        nextQuestion: 'DE447',
      },
      A1704: {
        key: 'A1704',
        text: 'Stage 3',
        nextQuestion: 'DE447',
      },
      A1707: {
        key: 'A1707',
        text: 'Stage 4',
        nextQuestion: 'DE447',
      },
      A1713: {
        key: 'A1713',
        text: 'Deep Tissue Pressure Injury (DTPI)',
        nextQuestion: 'DE447',
      },
      A1711: {
        key: 'A1711',
        text: 'Mucosal pressure injury not present on admission.',
        nextQuestion: 'DE447',
      },
      A1710: {
        key: 'A1710',
        text: 'Unstageable',
        nextQuestion: 'DE447',
      },
      UNK: {
        key: 'UNK',
        text: 'Unknown',
        nextQuestion: '{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
      },
      A66: {
        key: 'A66',
        text: 'Other: Please specify',
        nextQuestion: '{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
        child: 'otherDE408',
      },
    },
  },
  DE447: {
    key: 'DE447',
    text: 'Development of secondary morbidity during stay',
    render: 'radio(required : true)',
    answers: {
      A15: {
        key: 'A15',
        text: 'YES',
        nextQuestion: 'DE450',
      },
      A18: {
        key: 'A18',
        text: 'NO',
        nextQuestion:
          '{history.DE408}==A1701?DE2012:{history.DE408}==A1713?DE411:{history.DE408}==A1711?DE420:DE414',
      },
      UNK: {
        key: 'UNK',
        text: 'Unknown',
        nextQuestion:
          '{history.DE408}==A1701?DE2012:{history.DE408}==A1713?DE411:{history.DE408}==A1711?DE420:DE414',
      },
    },
  },
  otherDE408: {
    key: 'otherDE408',
    text: '',
    render: 'textbox(required : true)',
    answers: {
      noKey: {
        key: 'noKey',
        text: null,
      },
    },
  },
  DE450: {
    key: 'DE450',
    text: 'Secondary morbidity attributed to pressure injury or DTPI',
    render: 'radio(required : true)',
    answers: {
      A15: {
        key: 'A15',
        text: 'YES',
        nextQuestion:
          '{history.DE408}==A1701?DE2012:{history.DE408}==A1713?DE411:{history.DE408}==A1711?DE420:DE414',
      },
      A18: {
        key: 'A18',
        text: 'NO',
        nextQuestion:
          '{history.DE408}==A1701?DE2012:{history.DE408}==A1713?DE411:{history.DE408}==A1711?DE420:DE414',
      },
      UNK: {
        key: 'UNK',
        text: 'Unknown',
        nextQuestion:
          '{history.DE408}==A1701?DE2012:{history.DE408}==A1713?DE411:{history.DE408}==A1711?DE420:DE414',
      },
    },
  },
  DE2012: {
    key: 'DE2012',
    text: 'What was the status on admission of the Stage 2 pressure injury? ',
    render: 'radio(required : true)',
    answers: {
      A1698: {
        key: 'A1698',
        text: 'Stage 1',
        nextQuestion: 'DE420',
      },
      A1701: {
        key: 'A1701',
        text: 'Stage 2',
        nextQuestion: '{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
      },
      A1716: {
        key: 'A1716',
        text: 'Not present',
        nextQuestion: 'DE420',
      },
      UNK: {
        key: 'UNK',
        text: 'Unknown',
        nextQuestion: 'DE420',
      },
    },
  },
  DE411: {
    key: 'DE411',
    text:
      'What was the status on admission of the deep tissue pressure injury (DTPI)?',
    render: 'radio(required : true)',
    answers: {
      A1713: {
        key: 'A1713',
        text: 'Deep Tissue Pressure Injury (DTPI)',
        nextQuestion: '{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
      },
      A1698: {
        key: 'A1698',
        text: 'Stage 1',
        nextQuestion: 'DE420',
      },
      A1716: {
        key: 'A1716',
        text: 'Not present',
        nextQuestion: 'DE420',
      },
      UNK: {
        key: 'UNK',
        text: 'Unknown',
        nextQuestion: 'DE420',
      },
    },
  },
  DE414: {
    key: 'DE414',
    text:
      'What was the status on admission of the Stage 3, 4, or unstageable pressure injury that you are reporting? ',
    render: 'radio(required : true)',
    answers: {
      A1698: {
        key: 'A1698',
        text: 'Stage 1',
        nextQuestion: 'DE420',
      },
      A1701: {
        key: 'A1701',
        text: 'Stage 2',
        nextQuestion: 'DE420',
      },
      A1704: {
        key: 'A1704',
        text: 'Stage 3',
        nextQuestion: '{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
      },
      A1707: {
        key: 'A1707',
        text: 'Stage 4',
        nextQuestion: '{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
      },
      A1713: {
        key: 'A1713',
        text: 'Deep Tissue Pressure Injury (DTPI)',
        nextQuestion: '{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
      },
      A1710: {
        key: 'A1710',
        text: 'Unstageable',
        nextQuestion: '{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
      },
      A1716: {
        key: 'A1716',
        text: 'Not present',
        nextQuestion: 'DE420',
      },
      UNK: {
        key: 'UNK',
        text: 'Unknown',
        nextQuestion: 'DE420',
      },
    },
  },
  DE213: {
    key: 'DE213',
    text: 'Was the patient determined to be at increased risk for a fall?',
    render: 'radio(required : true)',
    answers: {
      A15: {
        key: 'A15',
        text: 'YES',
        nextQuestion: '{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
      },
      A18: {
        key: 'A18',
        text: 'NO',
        nextQuestion: '{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
      },
      UNK: {
        key: 'UNK',
        text: 'Unknown',
        nextQuestion: '{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
      },
    },
  },
  DE420: {
    key: 'DE420',
    text: 'Was the admission skin inspection documented?',
    render: 'radio(required : true)',
    answers: {
      A15: {
        key: 'A15',
        text: 'YES',
        nextQuestion: 'DE2015',
      },
      A18: {
        key: 'A18',
        text: 'NO',
        nextQuestion: 'DE2015',
      },
      UNK: {
        key: 'UNK',
        text: 'Unknown',
        nextQuestion: 'DE2015',
      },
    },
  },
  DE2015: {
    key: 'DE2015',
    text:
      'Was a pressure injury risk assessment documented prior to the event?',
    render: 'radio(required : true)',
    answers: {
      A15: {
        key: 'A15',
        text: 'YES',
        nextQuestion: 'DE432',
      },
      A18: {
        key: 'A18',
        text: 'NO',
        nextQuestion: 'DE432',
      },
      UNK: {
        key: 'UNK',
        text: 'Unknown',
        nextQuestion: 'DE432',
      },
    },
  },
  DE432: {
    key: 'DE432',
    text: 'Was any pressure injury preventive intervention implemented?',
    render: 'radio(required : true)',
    answers: {
      A15: {
        key: 'A15',
        text: 'YES',
        nextQuestion: 'DE438',
      },
      A18: {
        key: 'A18',
        text: 'NO',
        nextQuestion: 'DE438',
      },
      UNK: {
        key: 'UNK',
        text: 'Unknown',
        nextQuestion: 'DE438',
      },
    },
  },
  DE438: {
    key: 'DE438',
    text:
      'Was the use of a device, appliance, or equipment involved in the development or advancement of the pressure injury?',
    render: 'radio(required : true)',
    answers: {
      A15: {
        key: 'A15',
        text: 'YES',
        nextQuestion: '{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
      },
      A18: {
        key: 'A18',
        text: 'NO',
        nextQuestion: '{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
      },
      UNK: {
        key: 'UNK',
        text: 'Unknown',
        nextQuestion: '{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
      },
    },
  },
  DE513: {
    key: 'DE513',
    text: 'What are the characteristics of the surgical event?',
    render: 'radio(required : true)',
    answers: {
      A2178: {
        key: 'A2178',
        text: 'Burn and/or operating room fire',
        nextQuestion: 'DE516',
      },
      A2181: {
        key: 'A2181',
        text: 'Incorrect surgical or invasive procedure',
        nextQuestion: 'DE519',
      },
      A2172: {
        key: 'A2172',
        text: 'Surgical site infection',
        nextQuestion: 'DE461',
      },
      A2175: {
        key: 'A2175',
        text: 'Bleeding requiring return to the operating room',
        nextQuestion: 'DE461',
      },
      A2179: {
        key: 'A2179',
        text: 'Retained surgical Item',
        nextQuestion: 'DE461',
      },
      A2184: {
        key: 'A2184',
        text: 'Iatrogenic pneumothorax',
        nextQuestion: 'DE461',
      },
      A2187: {
        key: 'A2187',
        text: 'Unintended laceration or puncture',
        nextQuestion: 'DE461',
      },
      A2190: {
        key: 'A2190',
        text:
          'Dehiscence, flap or wound failure or disruption, or graft failure',
        nextQuestion: 'DE461',
      },
      A2193: {
        key: 'A2193',
        text: 'Unintended blockage, obstruction, or ligation',
        nextQuestion: 'DE461',
      },
      A2196: {
        key: 'A2196',
        text: 'Unplanned removal of organ',
        nextQuestion: 'DE461',
      },
      A2199: {
        key: 'A2199',
        text: 'Air embolus',
        nextQuestion: 'DE461',
      },
      A2200: {
        key: 'A2200',
        text: 'Physiologic complication not present prior to surgery',
        nextQuestion: 'DE2018',
      },
      A66: {
        key: 'A66',
        text: 'Other: Please specify',
        nextQuestion: 'DE461',
        child: 'otherDE513',
      },
    },
  },
  DE516: {
    key: 'DE516',
    text: 'Was the surgical event a burn, operating room fire, or both?',
    render: 'radio(required : true)',
    answers: {
      A2205: {
        key: 'A2205',
        text: 'Burn',
        nextQuestion: 'DE461',
      },
      A2208: {
        key: 'A2208',
        text: 'Operating room fire',
        nextQuestion: 'DE461',
      },
      A2211: {
        key: 'A2211',
        text: 'Both',
        nextQuestion: 'DE461',
      },
    },
  },
  DE519: {
    key: 'DE519',
    text: 'Incorrect surgical or invasive procedure',
    render: 'radio(required : true)',
    answers: {
      A2217: {
        key: 'A2217',
        text: 'Incorrect side',
        nextQuestion: 'DE461',
      },
      A2220: {
        key: 'A2220',
        text: 'Incorrect site',
        nextQuestion: 'DE461',
      },
      A2223: {
        key: 'A2223',
        text: 'Incorrect procedure',
        nextQuestion: 'DE461',
      },
    },
  },
  DE461: {
    key: 'DE461',
    text:
      'What was the description of the procedure associated with the event?',
    render: 'textbox(required : true)',
    answers: {
      noKey: {
        key: 'noKey',
        text: null,
        nextQuestion: 'DE2024',
      },
    },
  },
  DE2024: {
    key: 'DE2024',
    text: 'Which type(s) of anesthesia and/or sedation were used?',
    render: 'radio(required : true)',
    answers: {
      A3075: {
        key: 'A3075',
        text: 'General anesthesia',
        nextQuestion: '{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
      },
      A3078: {
        key: 'A3078',
        text:
          'Regional anesthesia (e.g., epidural, spinal, or peripheral nerve blocks)',
        nextQuestion: '{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
      },
      A3081: {
        key: 'A3081',
        text: 'Local or topical anesthesia',
        nextQuestion: '{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
      },
      A3084: {
        key: 'A3084',
        text: 'Sedation',
        nextQuestion: '{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
      },
      A1005: {
        key: 'A1005',
        text: 'None',
        nextQuestion: '{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
      },
      UNK: {
        key: 'UNK',
        text: 'Unknown',
        nextQuestion: '{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
      },
    },
  },
  DE2018: {
    key: 'DE2018',
    text:
      'Which of the following physiologic complication(s) occurred that was not present prior to surgery?',
    render: 'radio(required : true)',
    answers: {
      A3054: {
        key: 'A3054',
        text: 'Cardiac or circulatory event',
        nextQuestion: 'DE461',
      },
      A3057: {
        key: 'A3057',
        text: 'Central nervous system event',
        nextQuestion: 'DE461',
      },
      A3060: {
        key: 'A3060',
        text: 'Renal failure, impairment, or insufficiency',
        nextQuestion: 'DE461',
      },
      A3063: {
        key: 'A3063',
        text: 'Respiratory failure',
        nextQuestion: 'DE2021',
      },
      A66: {
        key: 'A66',
        text: 'Other: Please specify',
        nextQuestion: 'DE461',
        child: 'otherDE2018',
      },
    },
  },
  otherDE513: {
    key: 'otherDE513',
    text: '',
    render: 'textbox(required : true)',
    answers: {
      noKey: {
        key: 'noKey',
        text: null,
      },
    },
  },
  otherDE2018: {
    key: 'otherDE2018',
    text: '',
    render: 'textbox(required : true)',
    answers: {
      noKey: {
        key: 'noKey',
        text: null,
      },
    },
  },
  DE2021: {
    key: 'DE2021',
    text:
      'Which of the following best describes how the respiratory failure was manifested?',
    render: 'radio(required : true)',
    answers: {
      A3066: {
        key: 'A3066',
        text: 'Prolonged ventilator support following surgery',
        nextQuestion: 'DE461',
      },
      A3069: {
        key: 'A3069',
        text: 'Use of ventilator post-operatively only',
        nextQuestion: 'DE461',
      },
      A3072: {
        key: 'A3072',
        text: 'Incorrect procedure',
        nextQuestion: 'DE461',
      },
      A66: {
        key: 'A66',
        text: 'Other: Please specify',
        nextQuestion: 'DE461',
        child: 'otherDE2021',
      },
    },
  },
  otherDE2021: {
    key: 'otherDE2021',
    text: '',
    render: 'textbox(required : true)',
    answers: {
      noKey: {
        key: 'noKey',
        text: null,
      },
    },
  },
  DE1003: {
    key: 'DE1003',
    text: 'Which of the following occurred?',
    render: 'checkbox',
    answers: {
      noKey: {
        key: 'noKey',
        text: null,
        nextQuestion: 'DE1006',
      },
      A2601: {
        key: 'A2601',
        text: 'Deep Vein Thrombosis (DVT)',
        nextQuestion: 'DE1006',
      },
      A2604: {
        key: 'A2604',
        text: 'Pulmonary Embolism (PE)',
        nextQuestion: '_DE1015',
      },
    },
  },
  DE1006: {
    key: 'DE1006',
    text: 'What was the location of the Deep Vein Thrombosis (DVT)?',
    render: 'radio',
    answers: {
      noKey: {
        key: 'noKey',
        text: null,
        nextQuestion: 'DE2027',
      },
      A2607: {
        key: 'A2607',
        text: 'Upper extremity/upper thorax',
        nextQuestion: 'DE2027',
      },
      A2610: {
        key: 'A2610',
        text: 'Lower extremity/pelvis',
        nextQuestion: 'DE2027',
      },
      A2211: {
        key: 'A2211',
        text: 'Both',
        nextQuestion: 'DE2027',
      },
    },
  },
  DE2027: {
    key: 'DE2027',
    text:
      'Was an intravenous (IV) catheter present at the site of the Deep Vein Thrombosis (DVT)?',
    render: 'radio',
    answers: {
      noKey: {
        key: 'noKey',
        text: null,
        nextQuestion: 'DE1015',
      },
      A15: {
        key: 'A15',
        text: 'YES',
        nextQuestion: 'DE1015',
      },
      A18: {
        key: 'A18',
        text: 'NO',
        nextQuestion: 'DE1015',
      },
      UNK: {
        key: 'UNK',
        text: 'Unknown',
        nextQuestion: 'DE1015',
      },
    },
  },
  DE1015: {
    key: 'DE1015',
    text:
      'Prior to the onset of the VTE event, was a VTE risk assessment documented?',
    render: 'radio',
    answers: {
      noKey: {
        key: 'noKey',
        text: null,
        nextQuestion: 'DE1030',
      },
      A15: {
        key: 'A15',
        text: 'YES',
        nextQuestion: 'DE1030',
      },
      A18: {
        key: 'A18',
        text: 'NO',
        nextQuestion: 'DE1030',
      },
      UNK: {
        key: 'UNK',
        text: 'Unknown',
        nextQuestion: 'DE1030',
      },
    },
  },
  DE1030: {
    key: 'DE1030',
    text:
      'Prior to the onset of the VTE event, was any pharmacological anticoagulant prophylaxis administered?',
    render: 'radio',
    answers: {
      noKey: {
        key: 'noKey',
        text: null,
        nextQuestion: 'DE1027',
      },
      A15: {
        key: 'A15',
        text: 'YES',
        nextQuestion: 'DE1027',
      },
      A18: {
        key: 'A18',
        text: 'NO',
        nextQuestion: 'DE1027',
      },
      UNK: {
        key: 'UNK',
        text: 'Unknown',
        nextQuestion: 'DE1027',
      },
    },
  },
  DE1027: {
    key: 'DE1027',
    text:
      'Prior to the onset of the VTE event, was any physical or mechanical prophylaxis (e.g., graduated compression stockings, intermittent pneumatic compression device, venous foot pumps) applied?',
    render: 'radio',
    answers: {
      noKey: {
        key: 'noKey',
        text: null,
        nextQuestion: '{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
      },
      A15: {
        key: 'A15',
        text: 'YES',
        nextQuestion: '{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
      },
      A18: {
        key: 'A18',
        text: 'NO',
        nextQuestion: '{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
      },
      UNK: {
        key: 'UNK',
        text: 'Unknown',
        nextQuestion: '{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
      },
    },
  },
  review: {
    key: 'review',
    text: 'Summary of Answers',
    render: 'review',
    answers: {
      noKey: {
        key: 'noKey',
        text: null,
        nextQuestion: 'STOP',
      },
    },
  },
  otherDE21: {
    key: 'otherDE21',
    text: '',
    render: 'textbox(required: true)',
    answers: {
      noKey: {
        key: 'noKey',
        text: null,
      },
    },
  },*/
};
