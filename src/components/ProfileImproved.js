import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import * as Api from "../helpers/Api";
import Loader from "./Loader";
import * as actions from "../redux/actions";
import { selectors } from "../redux/reducer";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: undefined,
      showMore: false
    };

    this.firstNameChangeHandler = this.handleFirstNameChange.bind(this);
    this.lastNameChangeHandler = this.handleLastNameChange.bind(this);
    this.saveClickHandler = this.handleSaveClick.bind(this);
    this.showMoreClickHandler = this.handleShowMoreClick.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    const { user } = props;
    if (user !== state.user) {
      return { ...state, user };
    }
    return null;
  }

  handleFirstNameChange(e) {
    const newValue = e.target.value;

    this.setState(state => {
      const { user } = state;
      user.firstName = newValue;
      return {
        ...state,
        user
      };
    });
  }

  handleLastNameChange(e) {
    const newValue = e.target.value;

    this.setState(state => {
      const { user } = state;
      user.lastName = newValue;
      return {
        ...state,
        user
      };
    });
  }

  handleSaveClick() {
    this.props.updateUser(this.state.user);
  }

  handleShowMoreClick() {
    this.setState(state => ({ showMore: !state.showMore }));
  }

  render() {
    const { user, showMore } = this.state;
    const { isSubmitting } = this.props;

    if (!user) return <Loader />;

    const { firstName, lastName } = user;

    return (
      <Form>
        <Avatar />
        <Fields>
          <h2>Edit profile</h2>
          <label>
            First name:
            <input
              type="text"
              value={firstName}
              onChange={this.firstNameChangeHandler}
            />
          </label>
          <label>
            Last name:
            <input
              type="text"
              value={lastName}
              onChange={this.lastNameChangeHandler}
            />
          </label>
          <LinkButton onClick={this.showMoreClickHandler}>
            {showMore ? "Hide" : "Show"} more
          </LinkButton>
          {showMore && (
            <div>
              <label>
                Age:
                <input type="text" value={22} />
              </label>
            </div>
          )}
          <Actions>
            {isSubmitting && <Loader />}
            <button disabled={isSubmitting} onClick={this.saveClickHandler}>
              Save
            </button>
          </Actions>
        </Fields>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  user: selectors.getUser(state),
  isSubmitting: selectors.isSubmitting(state)
});

const mapDispatchToProps = dispatch => ({
  updateUser: user => dispatch(actions.updateUserAsync(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

const Form = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  border-top: 1px solid silver;
  padding-top: 20px;
`;

const Avatar = styled.div`
  width: 175px;
  height: 175px;
  background-color: silver;
  border-radius: 100%;
  margin-right: 60px;
`;

const Fields = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    input {
      margin-top: 4px;
      padding: 6px 10px;
      border-radius: 3px;
      border: 1px solid #ccc;
    }
  }
`;

const LinkButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
`;
