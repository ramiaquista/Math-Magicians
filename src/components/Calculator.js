import React from 'react';
import calculate from '../logic/calculate';
// import operate from '../logic/operate';
// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: {
        total: 0,
        next: 0,
        operation: '',
      },
    };
  }

  onClickHandler = (event) => {
    const { obj } = this.state;
    this.setState({
      obj: calculate(obj, event.target.value),
    });
  };

  displayNum = (object) => {
    if (object.total === null || object.operation !== null) {
      return object.next;
    }
    return object.total;
  };

  render() {
    const { obj } = this.state;
    return (
      <div className="calculator-container">
        <div className="res-display">
          <input type="number" placeholder={this.displayNum(obj)} />
        </div>
        <div className="numpad-row">
          <input
            className="normal-btn"
            onClick={this.onClickHandler}
            type="button"
            value="AC"
          />
          <input
            className="normal-btn"
            onClick={this.onClickHandler}
            type="button"
            value="+/-"
          />
          <input
            className="normal-btn"
            onClick={this.onClickHandler}
            type="button"
            value="%"
          />
          <input
            className="op-btns"
            onClick={this.onClickHandler}
            type="button"
            value="÷"
          />
        </div>
        <div className="numpad-row">
          <input
            className="normal-btn"
            onClick={this.onClickHandler}
            type="button"
            value="7"
          />
          <input
            className="normal-btn"
            onClick={this.onClickHandler}
            type="button"
            value="8"
          />
          <input
            className="normal-btn"
            onClick={this.onClickHandler}
            type="button"
            value="9"
          />
          <input
            className="op-btns"
            onClick={this.onClickHandler}
            type="button"
            value="x"
          />
        </div>
        <div className="numpad-row">
          <input
            className="normal-btn"
            onClick={this.onClickHandler}
            type="button"
            value="4"
          />
          <input
            className="normal-btn"
            onClick={this.onClickHandler}
            type="button"
            value="5"
          />
          <input
            className="normal-btn"
            onClick={this.onClickHandler}
            type="button"
            value="6"
          />
          <input
            className="op-btns"
            onClick={this.onClickHandler}
            type="button"
            value="-"
          />
        </div>
        <div className="numpad-row">
          <input
            className="normal-btn"
            onClick={this.onClickHandler}
            type="button"
            value="1"
          />
          <input
            className="normal-btn"
            onClick={this.onClickHandler}
            type="button"
            value="2"
          />
          <input
            className="normal-btn"
            onClick={this.onClickHandler}
            type="button"
            value="3"
          />
          <input
            className="op-btns"
            onClick={this.onClickHandler}
            type="button"
            value="+"
          />
        </div>
        <div className="numpad-last-row">
          <input
            className="normal-btn cero"
            onClick={this.onClickHandler}
            type="button"
            value="0"
          />
          <input
            className="normal-btn small"
            onClick={this.onClickHandler}
            type="button"
            value="."
          />
          <input
            className="op-btns small"
            onClick={this.onClickHandler}
            type="button"
            value="="
          />
        </div>
      </div>
    );
  }
}

export default Calculator;
