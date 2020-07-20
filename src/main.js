import { Component, ToyReact } from './ToyReact';

class Com extends Component {
  render() {
    return <div>{this.children}</div>;
  }
}

const com = (
  <Com class="hi">
    <div>Hello,I am Allen.</div>
    <div>This is a toy framework like React.</div>
  </Com>
);

ToyReact.render(com, document.body);
