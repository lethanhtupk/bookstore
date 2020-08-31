import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { compose } from "recompose";
import { withFirebase } from "../Firebase";
import * as ROUTER from "../constants/routes";
import * as ROLES from "../constants/roles";

const SignUpPage = () => (
  <div>
    <h1>SignUp</h1>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  defaultAvatar:
    "https://images.unsplash.com/photo-1583193510566-c5eb5403b88b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
  isAdmin: false,
  error: null,
};

class SignUpFormBase extends Component {
  state = { ...INITIAL_STATE };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onChangeCheckBox = (event) => {
    this.setState({ [event.target.name]: event.target.checked });
  };

  onSubmit = (event) => {
    event.preventDefault();

    const { username, email, passwordOne, defaultAvatar, isAdmin } = this.state;

    const roles = {};
    if (isAdmin) {
      roles[ROLES.ADMIN] = ROLES.ADMIN;
    }

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then((authUser) => {
        return this.props.firebase
          .user(authUser.user.uid)
          .set({ username, email, defaultAvatar, roles });
      })
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTER.LANDING);
      })
      .catch((error) => {
        this.setState({ error: error });
      });
  };

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      isAdmin,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";

    return (
      <form onSubmit={this.onSubmit} className="flex flex-col">
        <input
          className="p-3 border-gray-900 border-1"
          name="username"
          value={username}
          onChange={this.onChange}
          placeholder="Nhập Username"
          type="text"
        />
        <input
          className="p-3 border-gray-900 border-1"
          name="email"
          value={email}
          onChange={this.onChange}
          placeholder="Nhập Email"
          type="text"
        />
        <input
          className="p-3 border-gray-900 border-1"
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          placeholder="Nhập mật khẩu"
          type="password"
        />
        <input
          className="p-3 border-gray-900 border-1"
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          placeholder="Xác nhận mật khẩu"
          type="password"
        />
        <label>
          Admin:
          <input
            className="p-3 border-gray-900 border-1"
            name="isAdmin"
            checked={isAdmin}
            onChange={this.onChangeCheckBox}
            type="checkbox"
          />
        </label>
        <button disabled={isInvalid} type="submit">
          Đăng ký
        </button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignUpLink = () => (
  <p>
    Bạn chưa có tài khoản ? <Link to={ROUTER.SIGN_UP}>Đăng kí ngay</Link>
  </p>
);

const SignUpForm = compose(withRouter, withFirebase)(SignUpFormBase);

export default SignUpPage;

export { SignUpForm, SignUpLink };
