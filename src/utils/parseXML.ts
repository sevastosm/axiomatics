/**
 * Parses an XML string and converts it to a JSON object.
 * @param xmlString - The XML string to parse.
 * @returns A JSON object representation of the XML string.
 */
export function parseXML(xmlString: string) {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlString, "text/xml");


  // Thrown error message if the file is not a valid XML
  const parseError = xmlDoc.querySelector("parsererror");
  if (parseError) {
    throw new Error(`Error parsing XML: ${parseError.textContent}`);
  }
  /**
   * Recursively parses an XML element into a JSON object.
   * @param node - The XML element to parse.
   * @returns A JSON object representation of the XML element.
   */

  const parseNode = (node: Element) => {
    let obj = {};
    // If the node has no children and no attributes, it's an empty element
    if (node.childNodes.length === 0 && node.attributes.length === 0) {
      return "";
    }

    // If the node has attributes, add them to the object
    if (node.attributes.length > 0) {
      obj = {};
      for (let i = 0; i < node.attributes.length; i++) {
        const attribute = node.attributes[i];
        obj[attribute.name as string] = attribute.value;
      }
    }

    // If the node has only text content, return it as a string
    if (node.childNodes.length === 1 && node.childNodes[0].nodeType === 3) {
      return node.textContent;
    }

    // Process element's attributes (if any)
    for (const attr of node.attributes) {
      obj[attr.name]  = attr.value;
    }

    // Process element's child nodes
    for (const childNode of node.childNodes) {
      if (childNode.nodeType === 1) { // Element node
        const childObject = parseNode(childNode as Element);
        const nodeName = childNode.nodeName;

        // If a node with the same name already exists, convert it to an array or push to an existing array
        if (obj[nodeName]) {
          if (!Array.isArray(obj[nodeName])) {
            obj[nodeName] = [obj[nodeName]];
          }
          obj[nodeName].push(childObject);
        } else {
          obj[nodeName] = childObject;
        }
      } else if (childNode.nodeType === 3 && childNode.nodeValue?.trim()) {
          childNode.nodeValue.trim();
      }
    }

    return obj;
  };

  // Start parsing from the root element of the XML document
  return { [xmlDoc.documentElement.nodeName]: parseNode(xmlDoc.documentElement) };
}
