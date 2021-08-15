import "./App.css";
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import Login from "./Login";
import firebase from "firebase/app";
import { useAuthState } from "react-firebase-hooks/auth";
import Chat2 from "./Chat2";

function App() {
  const auth = firebase.auth();
  const [user] = useAuthState(auth);
  return auth.currentUser ? (
    <div>
      <div className="app">
        <Header />
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
          <Chat2 />
        </div>
      </div>
    </div>
  ) : (
    <Login />
  );
}

export default App;
