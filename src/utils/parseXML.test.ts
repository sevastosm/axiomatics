import { parseXML } from './parseXML';

describe('parseXML', () => {
  it('should correctly parse a simple XML string', () => {
    const xmlString = `<root><name>Node-name</name><type>some-type</type></root>`;
    const expectedOutput = {
      root: {
        name: 'Node-name',
        type: 'some-type'
      }
    };  
    expect(parseXML(xmlString)).toEqual(expectedOutput);
  });

  it('should correctly parse nested XML elements', () => {
    const xmlString = `
      <root>
        <parent>
          <child>value1</child>
          <child>value2</child>
        </parent>
      </root>
    `;
    const expectedOutput = {
      root: {
        parent: {
          child: ['value1', 'value2']
        }
      }
    };

    expect(parseXML(xmlString)).toEqual(expectedOutput);
  });

  it('should handle empty elements', () => {
    const xmlString = `<root><empty /></root>`;
    const expectedOutput = {
      root: {
        empty: ''
      }
    };

    expect(parseXML(xmlString)).toEqual(expectedOutput);
  });

  it('should handle elements with attributes', () => {
    const xmlString = `<root><element attr="value">some text</element></root>`;
    const expectedOutput = {
      root: {
        element: {
          _attributes: {
            attr: 'value'
          },
        },
        // @ts-ignore
        element: "some text",
      }
    };
    expect(parseXML(xmlString)).toEqual(expectedOutput);
  });


  
});
