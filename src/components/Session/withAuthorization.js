import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";

import * as ROUTERS from "../constants/routes";
import { withFirebase } from "../Firebase";
import AuthUserContext from "./context";

const withAuthorization = (condition) => (Component) => {
  const WithAuthorization = (props) => {
    useEffect(() => {
      props.firebase.auth.onAuthStateChanged((authUser) => {
        if (authUser) {
          props.firebase
            .user(authUser.uid)
            .once("value")
            .then((snapshot) => {
              const dbUser = snapshot.val();
              if (!dbUser.roles) {
                dbUser.roles = {};
              }
              authUser = {
                uid: authUser.uid,
                email: authUser.email,
                ...dbUser,
              };
              if (!condition(authUser)) {
                props.history.push(ROUTERS.SIGN_IN);
              }
            });
        } else {
          props.history.push(ROUTERS.LANDING);
        }
      });
    });
    return (
      <AuthUserContext.Consumer>
        {(authUser) =>
          condition(authUser.authUser) ? <Component {...props} /> : null
        }
      </AuthUserContext.Consumer>
    );
  };
  return compose(withRouter, withFirebase)(WithAuthorization);
};

export default withAuthorization;
