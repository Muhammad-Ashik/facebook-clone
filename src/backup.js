import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./MessageSender.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import db from "./firebase";
import firebase from "firebase/app";
import { useAuthState } from "react-firebase-hooks/auth";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import { storage } from "./firebase.js";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 500,
    height: "auto",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid transparent",
    outline: "none",
    boxShadow:
      "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
    borderRadius: "5px",
  },
}));

function MessageSender() {
  const auth = firebase.auth();
  const [user] = useAuthState(auth);
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const { uid, displayName } = auth.currentUser;
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [comment, setComment] = useState("");
  const [noLikes, setNoLikes] = useState(0);
  const [image, setImage] = useState("");
  const [caption, setCaption] = useState("");
  const [progress, setProgress] = useState(0);

  const uploadFileWithClick = () => {
    document.getElementsByClassName("imageFile")[0].click();
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpload = (event) => {
    event.preventDefault();

    if (image == "") {
      db.collection("posts").add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        caption: caption,
        imageUrl: image,
        noLikes: noLikes,
        username: displayName,
      });
    } else {
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          console.log(error);
          alert(error.message);
        },
        () => {
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              db.collection("posts").add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                caption: caption,
                imageUrl: url,
                noLikes: noLikes,
                username: displayName,
              });
              handleClose();
              setProgress(0);
              setCaption("");
              setImage(null);
            });
        }
      );
    }
  };

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === "" && imageUrl === "")
      alert("Please write something or insert a image url");
    else {
      db.collection("posts").add({
        userId: uid,
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        profilePic: user.photoURL,
        username: user.displayName,
        image: imageUrl,
      });
    }

    setInput("");
    setImageUrl("");
  };
  return (
    <div className="messageSender">
      <Modal open={open} onClose={handleClose}>
        <div style={modalStyle} className={classes.paper}>
          <form className="modal__form">
            <h3>Create Post</h3>
            <div className="modal__head">
              <Avatar
                src={user.photoURL}
                className="imageupload__avatar"
                alt=""
              />
              <p>{displayName}</p>
            </div>
            <textarea
              className="modal__input"
              type="text"
              onChange={(e) => setCaption(e.target.value)}
              onClick={handleOpen}
              placeholder={`What's on your mind ${displayName} ?`}
            />
            <div className="imageupload">
              <p>Add to Your Post</p>
              <div className="imageupload__section">
                <div onClick={uploadFileWithClick} className="upload">
                  <img src="/assets/up.png" />

                  <input
                    type="file"
                    className="imageFile"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <img src="/assets/user.png" />
              <img src="/assets/emoji.png" />
              <img src="/assets/location.png" />
              <img src="/assets/video.png" />
              <img src="/assets/dot.png" />
            </div>
            <div className="imageupload__submitButton">
              <Button type="submit" onClick={handleUpload}>
                Post
              </Button>
            </div>
          </form>
        </div>
      </Modal>

      <div className="messageSender__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            onClick={handleOpen}
            // value={input}
            // onChange={(e) => setInput(e.target.value)}
            className="messageSender__input"
            placeholder={`What's on your mind, ${user.displayName}`}
            type="text"
          />
          {/* <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Image URL (Optional)"
            type="text"
          /> */}
          <button type="submit" onClick={handleSubmit}>
            Hidden submit
          </button>
        </form>
      </div>
      <div onClick={handleOpen} className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Acitivity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;

// backup2
import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./MessageSender.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import db from "./firebase";
import firebase from "firebase/app";
import { useAuthState } from "react-firebase-hooks/auth";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import { storage } from "./firebase.js";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 500,
    height: "auto",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid transparent",
    outline: "none",
    boxShadow:
      "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
    borderRadius: "5px",
  },
}));

function MessageSender() {
  const auth = firebase.auth();
  const [user] = useAuthState(auth);
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const { uid, displayName, photoURL } = auth.currentUser;
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [comment, setComment] = useState("");
  const [noLikes, setNoLikes] = useState(0);
  const [image, setImage] = useState("");
  const [caption, setCaption] = useState("");
  const [progress, setProgress] = useState(0);

  const uploadFileWithClick = () => {
    document.getElementsByClassName("imageFile")[0].click();
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpload = (event) => {
    event.preventDefault();

    if (image == "") {
      db.collection("posts").add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        caption: caption,
        imageUrl: image,
        noLikes: noLikes,
        profilePic: photoURL,
        username: displayName,
      });
    } else {
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          console.log(error);
          alert(error.message);
        },
        () => {
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              db.collection("posts").add({
                profilePic: photoURL,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                caption: caption,
                imageUrl: url,
                noLikes: noLikes,
                username: displayName,
              });
              handleClose();
              setProgress(0);
              setCaption("");
              setImage(null);
            });
        }
      );
    }
  };

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === "" && imageUrl === "")
      alert("Please write something or insert a image url");
    else {
      db.collection("posts").add({
        userId: uid,
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        profilePic: user.photoURL,
        username: user.displayName,
        image: imageUrl,
      });
    }

    setInput("");
    setImageUrl("");
  };
  return (
    <div className="messageSender">
      <Modal open={open} onClose={handleClose}>
        <div style={modalStyle} className={classes.paper}>
          <form className="modal__form">
            <h3>Create Post</h3>
            <div className="modal__head">
              <Avatar
                src={user.photoURL}
                className="imageupload__avatar"
                alt=""
              />
              <p>{displayName}</p>
            </div>
            <textarea
              className="modal__input"
              type="text"
              onChange={(e) => setCaption(e.target.value)}
              onClick={handleOpen}
              placeholder={`What's on your mind ${displayName} ?`}
            />
            <div className="imageupload">
              <p>Add to Your Post</p>
              <div className="imageupload__section">
                <div onClick={uploadFileWithClick} className="upload">
                  <img src="/assets/up.png" />

                  <input
                    type="file"
                    className="imageFile"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <img src="/assets/user.png" />
              <img src="/assets/emoji.png" />
              <img src="/assets/location.png" />
              <img src="/assets/video.png" />
              <img src="/assets/dot.png" />
            </div>
            <div className="imageupload__submitButton">
              <Button type="submit" onClick={handleUpload}>
                Post
              </Button>
            </div>
          </form>
        </div>
      </Modal>

      <div className="messageSender__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            onClick={handleOpen}
            // value={input}
            // onChange={(e) => setInput(e.target.value)}
            className="messageSender__input"
            placeholder={`What's on your mind, ${user.displayName}`}
            type="text"
          />
          {/* <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Image URL (Optional)"
            type="text"
          /> */}
          <button type="submit" onClick={handleSubmit}>
            Hidden submit
          </button>
        </form>
      </div>
      <div onClick={handleOpen} className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Acitivity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
