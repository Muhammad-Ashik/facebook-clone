import React, { useEffect } from "react";
import "./Chat2.css";
import $ from "jquery";
import { useRef, useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

function Chat2() {
  const auth = firebase.auth();
  const firestore = firebase.firestore();
  const [user] = useAuthState(auth);
  const dummy = useRef();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt");
  const [messages] = useCollectionData(query, { idField: "id" });
  const [formValue, setFormValue] = useState("");
  const [transform, setTransform] = useState("rotate(45deg)");
  // const [newmsg, setNewmsg] = useState(0);

  // useEffect(() => {
  //   setNewmsg(newmsg + 1);
  // }, [messages]);

  useEffect(() => {
    $(".chat-body").slideToggle("slow");
  }, []);
  const handleClick = () => {
    if (transform === "rotate(45deg)") {
      setTransform("rotate(225deg)");
    } else {
      setTransform("rotate(45deg)");
    }
    $(".chat-body").slideToggle("slow");
  };
  function ChatMessage(props) {
    const { text, uid, photoURL, displayName } = props.message;
    const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

    return (
      <>
        <div className={`message ${messageClass}`}>
          <img
            alt=""
            src={
              photoURL ||
              "https://api.adorable.io/avatars/23/abott@adorable.png"
            }
          />
          <div className="name_chat">
            <div className="name">{displayName}</div>
            <p className="chat">{text}</p>
          </div>
        </div>
      </>
    );
  }

  const { uid, photoURL, displayName } = auth.currentUser;
  // const [flag, setFlag] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
      displayName,
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
    // setFlag(true);
    //setNewmsg(newmsg + 1);
  };

  //console.log(newmsg);

  return (
    <div className="chat-box">
      <div className="chat-head">
        <h3>
          Chat
          {/* <span className="">{newmsg === 0 || flag ? "" : newmsg}</span> */}
        </h3>
        <div className="max" onClick={() => handleClick()}>
          <div className="maxi" style={{ transform: transform }}></div>
        </div>
      </div>
      <div className="chat-body">
        <div className="msg-insert">
          {messages &&
            messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

          <span ref={dummy}></span>
        </div>
        {/* <div className="msg-insert">
              <div className="msg-send"> Send message </div>
              <div className="msg-receive"> Received message </div>
            </div> */}
        <div className="chat-text">
          <form onSubmit={sendMessage}>
            <input
              value={formValue}
              // onClick={() => setNewmsg(0)}
              onChange={(e) => setFormValue(e.target.value)}
              placeholder="send message"
            />
            <button type="submit" disabled={!formValue}>
              <span>Send</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Chat2;
