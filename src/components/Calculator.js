import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [obj, setObj] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const onClickHandler = (event) => {
    setObj(calculate(obj, event.target.value));
  };

  const displayNum = (object) => {
    if (Object.keys(object).length === 0) {
      return 0;
    }
    if (Object.keys(object).length === 1) {
      return object.operation;
    }
    if (object.total === null) {
      return object.next;
    }
    if (object.next === null && object.operation !== null) {
      return `${object.total} ${object.operation}`;
    }
    if (
      object.next !== null && object.operation !== null && object.total !== null
    ) {
      return `${object.total} ${object.operation} ${object.next}`;
    }
    return object.total;
  };

  return (
    <section className="d-flex calc">
      <div className="calculator-title">
        <h2>Lets do some math!</h2>
      </div>
      <div className="calculator-container">
        <div className="res-display">
          <input type="number" placeholder={displayNum(obj)} />
        </div>
        <div className="numpad-row">
          <input
            className="normal-btn"
            onClick={onClickHandler}
            type="button"
            value="AC"
          />
          <input
            className="normal-btn"
            onClick={onClickHandler}
            type="button"
            value="+/-"
          />
          <input
            className="normal-btn"
            onClick={onClickHandler}
            type="button"
            value="%"
          />
          <input
            className="op-btns"
            onClick={onClickHandler}
            type="button"
            value="÷"
          />
        </div>
        <div className="numpad-row">
          <input
            className="normal-btn"
            onClick={onClickHandler}
            type="button"
            value="7"
          />
          <input
            className="normal-btn"
            onClick={onClickHandler}
            type="button"
            value="8"
          />
          <input
            className="normal-btn"
            onClick={onClickHandler}
            type="button"
            value="9"
          />
          <input
            className="op-btns"
            onClick={onClickHandler}
            type="button"
            value="x"
          />
        </div>
        <div className="numpad-row">
          <input
            className="normal-btn"
            onClick={onClickHandler}
            type="button"
            value="4"
          />
          <input
            className="normal-btn"
            onClick={onClickHandler}
            type="button"
            value="5"
          />
          <input
            className="normal-btn"
            onClick={onClickHandler}
            type="button"
            value="6"
          />
          <input
            className="op-btns"
            onClick={onClickHandler}
            type="button"
            value="-"
          />
        </div>
        <div className="numpad-row">
          <input
            className="normal-btn"
            onClick={onClickHandler}
            type="button"
            value="1"
          />
          <input
            className="normal-btn"
            onClick={onClickHandler}
            type="button"
            value="2"
          />
          <input
            className="normal-btn"
            onClick={onClickHandler}
            type="button"
            value="3"
          />
          <input
            className="op-btns"
            onClick={onClickHandler}
            type="button"
            value="+"
          />
        </div>
        <div className="numpad-last-row">
          <input
            className="normal-btn cero"
            onClick={onClickHandler}
            type="button"
            value="0"
          />
          <input
            className="normal-btn small"
            onClick={onClickHandler}
            type="button"
            value="."
          />
          <input
            className="op-btns small"
            onClick={onClickHandler}
            type="button"
            value="="
          />
        </div>
      </div>
    </section>
  );
};

export default Calculator;
