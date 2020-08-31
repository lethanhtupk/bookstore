import React from "react";
import { withFirebase } from "../Firebase";

const SignOutButton = ({ firebase, onClose }) => (
  <button
    onClick={() => {
      firebase.doSignOut();
      onClose();
    }}
    className="block mt-3 text-gray-400 hover:text-white"
  >
    Đăng xuất
  </button>
);

export default withFirebase(SignOutButton);
