import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import logo from "./../logo.svg";
import Loader from "./Loader";
import Counter from "./Counter";

// An improvement? Anyone?
class Header extends React.Component {
  render() {
    const { user, isLoading } = this.props;

    return (
      <StyledHeader>
        <img src={logo} className="App-logo" alt="logo" height="40" />
        <Counter />
        {isLoading ? <Loader /> : <div>Welcome, {user.firstName}</div>}
      </StyledHeader>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    user: state.user,
    isLoading: state.isLoading
  };
};

export default connect(mapStateToProps)(Header);

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  height: 70px;
  box-sizing: border-box;
  padding: 0px 20px;
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
`;
