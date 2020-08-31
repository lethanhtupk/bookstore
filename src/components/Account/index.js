import React from "react";
import { withAuthorization, AuthUserContext } from "../Session";

const AccountPage = () => {
  return (
    <AuthUserContext.Consumer>
      {(authUser) => (
        <div>
          <h1>Account Page</h1>
          <p>Email: {authUser.email} </p>
        </div>
      )}
    </AuthUserContext.Consumer>
  );
};

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(AccountPage);
