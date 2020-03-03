/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface CustomElementsShell {}
  interface CustomElementsTable {
    'data': Object;
    'followHref': boolean;
    'items': Array<Object>;
  }
}

declare global {


  interface HTMLCustomElementsShellElement extends Components.CustomElementsShell, HTMLStencilElement {}
  var HTMLCustomElementsShellElement: {
    prototype: HTMLCustomElementsShellElement;
    new (): HTMLCustomElementsShellElement;
  };

  interface HTMLCustomElementsTableElement extends Components.CustomElementsTable, HTMLStencilElement {}
  var HTMLCustomElementsTableElement: {
    prototype: HTMLCustomElementsTableElement;
    new (): HTMLCustomElementsTableElement;
  };
  interface HTMLElementTagNameMap {
    'custom-elements-shell': HTMLCustomElementsShellElement;
    'custom-elements-table': HTMLCustomElementsTableElement;
  }
}

declare namespace LocalJSX {
  interface CustomElementsShell {}
  interface CustomElementsTable {
    'data'?: Object;
    'followHref'?: boolean;
    'items'?: Array<Object>;
    'onNavigate'?: (event: CustomEvent<any>) => void;
  }

  interface IntrinsicElements {
    'custom-elements-shell': CustomElementsShell;
    'custom-elements-table': CustomElementsTable;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'custom-elements-shell': LocalJSX.CustomElementsShell & JSXBase.HTMLAttributes<HTMLCustomElementsShellElement>;
      'custom-elements-table': LocalJSX.CustomElementsTable & JSXBase.HTMLAttributes<HTMLCustomElementsTableElement>;
    }
  }
}


