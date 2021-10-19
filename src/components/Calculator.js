import React from 'react';
// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator-container">
        <div className="res-display">
          <input type="number" />
        </div>
        <div className="numpad-row">
          <input className="normal-btn" type="button" value="AC" />
          <input className="normal-btn" type="button" value="+/-" />
          <input className="normal-btn" type="button" value="%" />
          <input className="op-btns" type="button" value="÷" />
        </div>
        <div className="numpad-row">
          <input className="normal-btn" type="button" value="7" />
          <input className="normal-btn" type="button" value="8" />
          <input className="normal-btn" type="button" value="9" />
          <input className="op-btns" type="button" value="x" />
        </div>
        <div className="numpad-row">
          <input className="normal-btn" type="button" value="4" />
          <input className="normal-btn" type="button" value="5" />
          <input className="normal-btn" type="button" value="6" />
          <input className="op-btns" type="button" value="-" />
        </div>
        <div className="numpad-row">
          <input className="normal-btn" type="button" value="1" />
          <input className="normal-btn" type="button" value="2" />
          <input className="normal-btn" type="button" value="3" />
          <input className="op-btns" type="button" value="+" />
        </div>
        <div className="numpad-last-row">
          <input className="normal-btn cero" type="button" value="0" />
          <input className="normal-btn small" type="button" value="." />
          <input className="op-btns small" type="button" value="=" />
        </div>
      </div>
    );
  }
}

export default Calculator;
