import ParseRender from '../../util/ParseRender';

describe('the parseRender function', () => {
  it('should parse the simple radio component', () => {
    expect(ParseRender('radio')).toEqual([
      { component: 'RadioField', attributes: null },
    ]);
  });

  it('should parse the simple datepicker component', () => {
    expect(ParseRender('datepicker')).toEqual([
      { component: 'DatePicker', attributes: null },
    ]);
  });

  it('should parse the complex datepicker component', () => {
    const complexRenderObject = ParseRender(
      'datepicker(min: 01/01/2018, max: 01/20/2018)',
    );
    const component = complexRenderObject[0].component;
    const attributes = complexRenderObject[0].attributes;
    expect(component).toEqual('DatePicker');
    expect(attributes).toEqual([
      { key: 'min', value: '01/01/2018' },
      { key: 'max', value: '01/20/2018' },
    ]);
  });

  it('should parse the complex combination of components', () => {
    const complexRenderObject = ParseRender(
      'datepicker(min: 01/01/2018, max: 01/20/2018)&radio(answers: [A123,A234,A545])',
    );
    const component1 = complexRenderObject[0].component;
    const attributes1 = complexRenderObject[0].attributes;
    const component2 = complexRenderObject[1].component;
    const attributes2 = complexRenderObject[1].attributes;
    expect(component1).toEqual('DatePicker');
    expect(attributes1).toEqual([
      { key: 'min', value: '01/01/2018' },
      { key: 'max', value: '01/20/2018' },
    ]);
    expect(component2).toEqual('RadioField');
    expect(attributes2).toEqual([
      { key: 'answers', value: '[A123,A234,A545]' },
    ]);
  });
});
