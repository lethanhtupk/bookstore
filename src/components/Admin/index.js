import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { withFirebase } from "../Firebase";
import { compose } from "recompose";
import { withAuthorization } from "../Session";
import * as ROLES from "../constants/roles";

const AdminPage = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    props.firebase.users().on("value", (snapshot) => {
      setIsLoading(false);
      console.log(snapshot.val());
      const userObjects = snapshot.val();
      if (userObjects) {
        const usersList = Object.keys(userObjects).map((key) => ({
          ...userObjects[key],
          uid: key,
        }));
        setUsers(usersList);
      }
    });
  }, []);
  return (
    <div>
      <h1>Admin Page</h1>
      {isLoading && <div>Loading....</div>}
      <UserList users={users} />
    </div>
  );
};

const UserList = ({ users }) => (
  <ul>
    {users.map((user) => (
      <li key={user.uid}>
        <span>
          <strong>ID: </strong> {user.uid}
        </span>
        <span>
          <strong>Email: </strong> {user.email}
        </span>
        <span>
          <strong>username: </strong> {user.username}
        </span>
      </li>
    ))}
  </ul>
);

const condition = (authUser) => authUser && !!authUser.roles[ROLES.ADMIN];

export default compose(withAuthorization(condition), withFirebase)(AdminPage);
