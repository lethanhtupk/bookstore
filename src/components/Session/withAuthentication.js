import React from "react";
import { useState, useEffect } from "react";
import { withFirebase } from "../Firebase";
import AuthUserContext from "./context";

const withAuthentication = (Component) => {
  const WithAuthentication = (props) => {
    const [authUser, setAuthUser] = useState({
      authUser: JSON.parse(localStorage.getItem("authUser")),
    });
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
              localStorage.setItem("authUser", JSON.stringify(authUser));
              setAuthUser({ authUser: authUser });
            });
        } else {
          localStorage.removeItem(authUser);
          setAuthUser({ authUser: null });
        }
      });
    }, []);
    return (
      <AuthUserContext.Provider value={authUser}>
        <Component {...props} />
      </AuthUserContext.Provider>
    );
  };
  return withFirebase(WithAuthentication);
};

export default withAuthentication;
