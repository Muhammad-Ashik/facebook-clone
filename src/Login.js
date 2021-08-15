import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import firebase from "firebase/app";
import { useAuthState } from "react-firebase-hooks/auth";
import db from "./firebase";

function Login() {
  const auth = firebase.auth();
  const [user] = useAuthState(auth);
  const signIn = () => {
    //sign in
    const provider = new firebase.auth.GoogleAuthProvider();
    /* auth.signInWithPopup(provider);
     console.log(user); */

    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const { email, displayName: name, phone } = result.user;
        console.log(email, name, phone, "email, name , phone");
        console.log(result, "result");

        db.collection("users").add({
          email,
          name,
          phone: phone == undefined ? "" : phone,
        });

        /* @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(user, user);
        // ...
      })
      .catch((error) => {
        console.log(error, "error");
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img src="./assets/logo.png" alt="" />
        <img src="./assets/text-logo.png" alt="" />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In with gmail
      </Button>
    </div>
  );
}

export default Login;
