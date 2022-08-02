import React, { Component } from 'react';
import calculate from '../logic/calculate';
import operate from '../logic/operate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    const button = e.target.id;
    window.console.log(button);
  }

  render() {
    return (
      <div className="container">
        <div className="result-container">0</div>
        <div className="rows">
          <div className="row-1">
            <button type="button" id="AC" onClick={this.handleClick}>AC</button>
            <button type="button" id="+/-" onClick={this.handleClick}>+/-</button>
            <button type="button" id="%" onClick={this.handleClick}>%</button>
            <button type="button" id="÷" onClick={this.handleClick}>÷</button>
          </div>
          <div className="row-2">
            <button type="button" id="7" onClick={this.handleClick}>7</button>
            <button type="button" id="8" onClick={this.handleClick}>8</button>
            <button type="button" id="9" onClick={this.handleClick}>9</button>
            <button type="button" id="x" onClick={this.handleClick}>x</button>
          </div>
          <div className="row-3">
            <button type="button" id="4" onClick={this.handleClick}>4</button>
            <button type="button" id="5" onClick={this.handleClick}>5</button>
            <button type="button" id="6" onClick={this.handleClick}>6</button>
            <button type="button" id="-" onClick={this.handleClick}>-</button>
          </div>
          <div className="row-4">
            <button type="button" id="1" onClick={this.handleClick}>1</button>
            <button type="button" id="2" onClick={this.handleClick}>2</button>
            <button type="button" id="3" onClick={this.handleClick}>3</button>
            <button type="button" id="+" onClick={this.handleClick}>+</button>
          </div>
          <div className="row-5">
            <button type="button" id="0" onClick={this.handleClick}>0</button>
            <button type="button" id="." onClick={this.handleClick}>.</button>
            <button type="button" id="=" onClick={this.handleClick}>=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
