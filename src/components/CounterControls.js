import React from "react";
import { connect } from "react-redux";

import * as actions from "../redux/actions";

class CounterControls extends React.Component {
  constructor(props) {
    super(props);

    this.minusClickHandler = this.handleMinusClick.bind(this);
    this.plusClickHandler = this.handlePlusClick.bind(this);
  }

  handleMinusClick() {
    this.props.deDecrease();
  }

  handlePlusClick() {
    this.props.doIncrease();
  }

  render() {
    return (
      <>
        <button onClick={this.minusClickHandler}>-</button>
        <button onClick={this.plusClickHandler}>+</button>
      </>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    doIncrease: function() {
      dispatch(actions.increase());
    },
    deDecrease: () => dispatch(actions.decrease())
  };
}

export default connect(null, mapDispatchToProps)(CounterControls);
