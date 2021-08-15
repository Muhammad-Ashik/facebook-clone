import { Button } from "@material-ui/core";
import React from "react";
import "./Logout.css";
import firebase from "firebase/app";

function Logout() {
  const auth = firebase.auth();
  return (
    auth.currentUser && (
      <div className="logout">
        <Button className="sign-out" onClick={() => auth.signOut()}>
          Sign Out
        </Button>
      </div>
    )
  );
}

export default Logout;
