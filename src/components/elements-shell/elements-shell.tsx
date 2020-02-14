import { Component, h } from '@stencil/core';

@Component({
  tag: 'custom-elements-shell',
  shadow: true
})
export class ElementsShell {

  tableItems = [
    {
      "item": "Home",
      "icon": "fa fa-cog",
      "url": "/"
    },
    {
      "item": "Someplace Else",
      "icon": "fa fa-bang",
      "url": "/elsewhere"
    }
  ]

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <custom-elements-table items={this.tableItems}></custom-elements-table>
      </div>
    );
  }

}
