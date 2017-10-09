import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(ev) {
    console.log("Sending a GET API Call !!!");
    axios.get('http://127.0.0.1:8000/snippets/')
    .then(res => {
            console.log(res);
    }).then(response => {
        console.log(JSON.stringify(response));
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <button type="button" onClick={this.onClick}>Get Snippets</button>
        </p>
      </div>
    );
  }
}

export default App;
