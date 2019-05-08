import React from "react";
import logo from "./logo.svg";
import "./App.css";

import getLargestPairSum from "./arrays";

class App extends React.Component {
  state = {
    arrays: {
      testArr1: [0, 1, 2, 3, 4, 5],
      testArr2: [-1, 0, 1],
      testArr3: [1, 1],
      testArr4: [12, -6, 0, 1, 1, 1, 1, -2, 3, 4, 5, -8, -20, 11, 15],
      testArr5: [1, 1, 1, 1, 1, 1, 1],
      testArr6: [0, 0, 0, 0]
    },
    sum: 0,
    input: "",
    arrayToTest: []
  };

  renderOptions = () => {
    const { arrays } = this.state;
    return Object.keys(arrays).map(keyName => (
      <option key={keyName} value={keyName}>
        {keyName}
      </option>
    ));
  };

  mapArrays = () => {
    const { arrays } = this.state;
    return Object.keys(arrays).map((keyname, i) => (
      <p key={keyname}>
        Test array {i+1}: <code>[{arrays[keyname].toString()}]</code>
      </p>
    ));
  };

  handleSelect = arrKey => {
    console.log("here:", arrKey);
    this.setState(state => ({
      ...state,
      sum: getLargestPairSum(state.arrays[arrKey])
    }));
  };

  handleInput = e => {
    this.setState({ input: e.target.value });
  };

  testInput = () => {
    const arr = this.state.input.split(",");
    const numArr = arr.map(item => parseInt(item, 10));
    this.setState(state => ({
      ...state,
      sum: getLargestPairSum(numArr)
    }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="App-header-container">
            {this.mapArrays()}
            <select
              defaultValue="0"
              onChange={e => this.handleSelect(e.target.value)}
            >
              <option value="0">Choose array to test</option>
              {this.renderOptions()}
            </select>
            <p>Or type your own numbers (ex. 5,12,-4,1,5):</p>
            <input
              type="text"
              value={this.state.input}
              onChange={this.handleInput}
            />
            <button onClick={this.testInput}>Test your input</button>
            <p>Sum: {this.state.sum}</p>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
