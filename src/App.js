import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
		super(props);

		this.state = {
      buttonCount: 0
    }
    this.addClick = this.addClick.bind(this);
  }

  addClick () {
    const val = this.state.buttonCount + 1;
		this.setState({buttonCount: val});
	}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Create React App</h1>
        </header>
        <p> Button pressed {this.state.buttonCount} time(s)</p>
        <button type="submit" onClick={this.addClick} >
          Press The Button
        </button>


      </div>
    );
  }
}

export default App;
