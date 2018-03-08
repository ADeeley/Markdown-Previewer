import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    //this.content = m('# Marked in browser\n\nRendered by **marked**.')
    this.state = {content: ''};
    this.translateMarkdown = this.translateMarkdown.bind(this);
  }

  translateMarkdown(event) {
    this.setState({content: event.target.value})
  }

  render() {
    return (
      <div className="container">
        {this.content}
        <textarea 
          className="input-text-box"
          onChange={this.translateMarkdown}
          >
        </textarea>
        <textarea 
          className="input-text-box"
          readOnly="true"
          value={this.state.content}>
        </textarea>
      </div>
    );
  }
}


export default App;
