// tslint:disable:member-ordering

export class XPathNamespace implements Node {
  static XPATH_NAMESPACE_NODE = 13;

  isXPathNamespace = true;
  ownerDocument: Document | null;
  nodeName = '#namespace';
  prefix: string;
  localName: string;
  namespaceURI: string;
  nodeValue: string;
  ownerElement: Element;
  nodeType: number;

  constructor(pre: string, ns: string, p: Element) {
    this.isXPathNamespace = true;
    this.ownerDocument = p.ownerDocument;
    this.nodeName = '#namespace';
    this.prefix = pre;
    this.localName = pre;
    this.namespaceURI = ns;
    this.nodeValue = ns;
    this.ownerElement = p;
    this.nodeType = XPathNamespace.XPATH_NAMESPACE_NODE;
  }

  toString() {
    return '{ "' + this.prefix + '", "' + this.namespaceURI + '" }';
  }

  /**
   * Unused and unsupported properties
   */
  readonly baseURI: string;
  readonly childNodes: NodeListOf<ChildNode>;
  readonly firstChild: ChildNode | null;
  readonly isConnected: boolean;
  readonly lastChild: ChildNode | null;
  readonly nextSibling: ChildNode | null;
  readonly parentElement: HTMLElement | null;
  readonly parentNode: Node & ParentNode | null;
  readonly previousSibling: ChildNode | null;
  textContent: string | null;
  appendChild = unsupported;
  cloneNode = unsupported;
  compareDocumentPosition = unsupported;
  contains = unsupported;
  getRootNode = unsupported;
  hasChildNodes = unsupported;
  insertBefore = unsupported;
  isDefaultNamespace = unsupported;
  isEqualNode = unsupported;
  isSameNode = unsupported;
  lookupNamespaceURI = unsupported;
  lookupPrefix = unsupported;
  normalize = unsupported;
  removeChild = unsupported;
  replaceChild = unsupported;
  readonly ATTRIBUTE_NODE: 2;
  readonly CDATA_SECTION_NODE: 4;
  readonly COMMENT_NODE: 8;
  readonly DOCUMENT_FRAGMENT_NODE: 11;
  readonly DOCUMENT_NODE: 9;
  readonly DOCUMENT_POSITION_CONTAINED_BY: 16;
  readonly DOCUMENT_POSITION_CONTAINS: 8;
  readonly DOCUMENT_POSITION_DISCONNECTED: 1;
  readonly DOCUMENT_POSITION_FOLLOWING: 4;
  readonly DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: 32;
  readonly DOCUMENT_POSITION_PRECEDING: 2;
  readonly DOCUMENT_TYPE_NODE: 10;
  readonly ELEMENT_NODE: 1;
  readonly ENTITY_NODE: 6;
  readonly ENTITY_REFERENCE_NODE: 5;
  readonly NOTATION_NODE: 12;
  readonly PROCESSING_INSTRUCTION_NODE: 7;
  readonly TEXT_NODE: 3;
  addEventListener = unsupported;
  dispatchEvent = unsupported;
  removeEventListener = unsupported;
}

function unsupported(): any {
  throw new Error('Unsupported');
}
