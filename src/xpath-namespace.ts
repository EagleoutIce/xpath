// tslint:disable:member-ordering

// @ts-ignore
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
  readonly baseURI: string = undefined as never;
  readonly childNodes: NodeListOf<ChildNode> = undefined as never;
  readonly firstChild: ChildNode | null = undefined as never;
  readonly isConnected: boolean = undefined as never;
  readonly lastChild: ChildNode | null = undefined as never;
  readonly nextSibling: ChildNode | null = undefined as never;
  readonly parentElement: HTMLElement | null = undefined as never;
  readonly parentNode: Node & ParentNode | null = undefined as never;
  readonly previousSibling: ChildNode | null = undefined as never;
  textContent: string | null = undefined as never;
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
  readonly ATTRIBUTE_NODE = 2 as const;
  readonly CDATA_SECTION_NODE  = 4 as const;
  readonly COMMENT_NODE = 8 as const;
  readonly DOCUMENT_FRAGMENT_NODE = 11 as const;
  readonly DOCUMENT_NODE = 9 as const;
  readonly DOCUMENT_POSITION_CONTAINED_BY = 16 as const;
  readonly DOCUMENT_POSITION_CONTAINS = 8 as const;
  readonly DOCUMENT_POSITION_DISCONNECTED = 1 as const;
  readonly DOCUMENT_POSITION_FOLLOWING = 4 as const;
  readonly DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = 32 as const;
  readonly DOCUMENT_POSITION_PRECEDING = 2 as const;
  readonly DOCUMENT_TYPE_NODE = 10 as const;
  readonly ELEMENT_NODE = 1 as const;
  readonly ENTITY_NODE = 6 as const;
  readonly ENTITY_REFERENCE_NODE = 5 as const;
  readonly NOTATION_NODE = 12 as const;
  readonly PROCESSING_INSTRUCTION_NODE = 7 as const;
  readonly TEXT_NODE = 3 as const;
  addEventListener = unsupported;
  dispatchEvent = unsupported;
  removeEventListener = unsupported;
}

function unsupported(): any {
  throw new Error('Unsupported');
}
