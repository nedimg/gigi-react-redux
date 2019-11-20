import React from "react";
import { connect } from "react-redux";

const Counter = props => <h5>Value is: {props.counterValue}</h5>;

function mapStateToProps(state) {
  return {
    counterValue: state.counter
  };
}

export default connect(mapStateToProps)(Counter);
