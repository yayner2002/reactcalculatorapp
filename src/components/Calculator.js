import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="result-container">0</div>
        <div className="rows">
          <div className="row-1">
            <button type="button">AC</button>
            <button type="button">+/-</button>
            <button type="button">%</button>
            <button type="button">÷</button>
          </div>
          <div className="row-2">
            <button type="button">7</button>
            <button type="button">8</button>
            <button type="button">9</button>
            <button type="button">x</button>
          </div>
          <div className="row-3">
            <button type="button">4</button>
            <button type="button">5</button>
            <button type="button">6</button>
            <button type="button">-</button>
          </div>
          <div className="row-4">
            <button type="button">1</button>
            <button type="button">2</button>
            <button type="button">3</button>
            <button type="button">+</button>
          </div>
          <div className="row-5">
            <button type="button">0</button>
            <button type="button">.</button>
            <button type="button">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
