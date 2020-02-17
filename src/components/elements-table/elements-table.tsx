import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'custom-elements-table',
  styleUrl: 'elements-table.css',
  shadow: true
})
export class ElementsTable {

  @Prop() items: Array<Object>

  render() {
    return (
      <table class="table">
        <thead>
            <tr>
                <th>Title</th>
                <th>Icon</th>
                <th>Url</th>
            </tr>
        </thead>
        <tbody>
          {this.items.map((item) =>
            <tr>
              <td>{item['title']}</td>
              <td>{item['icon']}</td>
              <td>{item['url']}</td>
            </tr>
          )}
        </tbody>
      </table>
      
    );
  }

}
