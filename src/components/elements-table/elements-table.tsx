import { Component, h, Prop, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'custom-elements-table',
  styleUrl: 'elements-table.css'
})
export class ElementsTable {

  @Prop() items: Array<Object>
  @Prop() followHref: boolean = true

  @Event({
    eventName: 'navigate',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) navigate: EventEmitter

  handleClick(e, item) {
    if (!this.followHref) e.preventDefault()

    this.navigate.emit({url: item.url})
  }


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
              <td>
                {item['title']}
              </td>
              <td>
                {item['icon']}
                </td>
              <td>
                <a
                  href={item['url']}
                  onClick={e => this.handleClick(e, item)}
                >
                  {item['url']}
                </a>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      
    );
  }

}
