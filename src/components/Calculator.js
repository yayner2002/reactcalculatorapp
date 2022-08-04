import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [initState, setInitialState] = useState({
    total: 0,
    operation: null,
    next: null,
  });

  const { total, next, operation } = initState;

  const handleClick = (e) => {
    const buttonName = e.target.id;
    setInitialState((prevState) => calculate(prevState, buttonName));
  };
  return (
    <div className="container">
      <div className="result-container">
        <span>{total}</span>
        <span>{operation}</span>
        <span>{next}</span>
      </div>
      <div className="rows">
        <div className="row-1">
          <button type="button" id="AC" onClick={handleClick}>
            AC
          </button>
          <button type="button" id="+/-" onClick={handleClick}>
            +/-
          </button>
          <button type="button" id="%" onClick={handleClick}>
            %
          </button>
          <button type="button" id="÷" onClick={handleClick}>
            ÷
          </button>
        </div>
        <div className="row-2">
          <button type="button" id="7" onClick={handleClick}>
            7
          </button>
          <button type="button" id="8" onClick={handleClick}>
            8
          </button>
          <button type="button" id="9" onClick={handleClick}>
            9
          </button>
          <button type="button" id="x" onClick={handleClick}>
            x
          </button>
        </div>
        <div className="row-3">
          <button type="button" id="4" onClick={handleClick}>
            4
          </button>
          <button type="button" id="5" onClick={handleClick}>
            5
          </button>
          <button type="button" id="6" onClick={handleClick}>
            6
          </button>
          <button type="button" id="-" onClick={handleClick}>
            -
          </button>
        </div>
        <div className="row-4">
          <button type="button" id="1" onClick={handleClick}>
            1
          </button>
          <button type="button" id="2" onClick={handleClick}>
            2
          </button>
          <button type="button" id="3" onClick={handleClick}>
            3
          </button>
          <button type="button" id="+" onClick={handleClick}>
            +
          </button>
        </div>
        <div className="row-5">
          <button type="button" id="0" onClick={handleClick}>
            0
          </button>
          <button type="button" id="." onClick={handleClick}>
            .
          </button>
          <button type="button" id="=" onClick={handleClick}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
