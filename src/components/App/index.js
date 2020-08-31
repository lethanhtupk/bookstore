import React from "react";
// import BookList from './containers/BookList';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "../Header/index";
import HomePage from "../Home";
import AccountPage from "../Account";
import SignIn from "../SigIn/index";
import SignUp from "../SignUp/index";
import AdminPage from "../Admin/index";
import LandingPage from "../Landing";

import * as ROUTER from "../constants/routes";

import { withAuthentication } from "../Session";
require("dotenv").config();

const App = () => {
  return (
    <Router>
      <div className="antialiased bg-gray-200 app">
        <Header />
        <Switch>
          <Route path={ROUTER.LANDING} exact component={LandingPage} />
          <Route path={ROUTER.HOME} component={HomePage} />
          <Route path={ROUTER.ACCOUNT} component={AccountPage} />
          <Route path={ROUTER.SIGN_IN} component={SignIn} />
          <Route path={ROUTER.SIGN_UP} component={SignUp} />
          <Route path={ROUTER.ADMIN} component={AdminPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default withAuthentication(App);
