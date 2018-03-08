import React, { Component } from 'react';
import './App.css';
const m = require('marked');


class App extends Component {
  constructor(props) {
    super(props);
    //this.content = m('# Marked in browser\n\nRendered by **marked**.')
    this.state = {__html: ''};
    this.translateMarkdown = this.translateMarkdown.bind(this);
  }

  translateMarkdown(event) {
    this.setState({__html: m(event.target.value)})
  }

  render() {
    return (
      <div className="container">
        <textarea 
          className="input-text-box"
          onChange={this.translateMarkdown}
          >
        </textarea>
        <div 
          className="output-text-box"
          dangerouslySetInnerHTML={this.state} />
      </div>
    );
  }
}


export default App;
