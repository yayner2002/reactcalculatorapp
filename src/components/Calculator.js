import React, { Component } from 'react';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    const buttonName = e.target.id;
    this.setState((state) => calculate(state, buttonName));
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="container">
        <div className="result-container">
          <span>{total}</span>
          <span>{operation}</span>
          <span>{next}</span>
        </div>
        <div className="rows">
          <div className="row-1">
            <button type="button" id="AC" onClick={this.handleClick}>
              AC
            </button>
            <button type="button" id="+/-" onClick={this.handleClick}>
              +/-
            </button>
            <button type="button" id="%" onClick={this.handleClick}>
              %
            </button>
            <button type="button" id="÷" onClick={this.handleClick}>
              ÷
            </button>
          </div>
          <div className="row-2">
            <button type="button" id="7" onClick={this.handleClick}>
              7
            </button>
            <button type="button" id="8" onClick={this.handleClick}>
              8
            </button>
            <button type="button" id="9" onClick={this.handleClick}>
              9
            </button>
            <button type="button" id="x" onClick={this.handleClick}>
              x
            </button>
          </div>
          <div className="row-3">
            <button type="button" id="4" onClick={this.handleClick}>
              4
            </button>
            <button type="button" id="5" onClick={this.handleClick}>
              5
            </button>
            <button type="button" id="6" onClick={this.handleClick}>
              6
            </button>
            <button type="button" id="-" onClick={this.handleClick}>
              -
            </button>
          </div>
          <div className="row-4">
            <button type="button" id="1" onClick={this.handleClick}>
              1
            </button>
            <button type="button" id="2" onClick={this.handleClick}>
              2
            </button>
            <button type="button" id="3" onClick={this.handleClick}>
              3
            </button>
            <button type="button" id="+" onClick={this.handleClick}>
              +
            </button>
          </div>
          <div className="row-5">
            <button type="button" id="0" onClick={this.handleClick}>
              0
            </button>
            <button type="button" id="." onClick={this.handleClick}>
              .
            </button>
            <button type="button" id="=" onClick={this.handleClick}>
              =
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
