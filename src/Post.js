import { Avatar } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./Post.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NearMeIcon from "@material-ui/icons/NearMe";
import { CallMergeSharp, ExpandMoreOutlined } from "@material-ui/icons";
import db from "./firebase";
import firebase from "firebase";

function Post({
  userId,
  noLikes = 0,
  postId,
  profilePic,
  image,
  username,
  timestamp,
  message,
}) {
  const auth = firebase.auth();
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [show, setShow] = useState("Like");
  const [show2, setShow2] = useState("");
  const { photoURL, displayName } = auth.currentUser;

  useEffect(() => {
    let unsubscribe;
    if (postId) {
      unsubscribe = db
        .collection("posts")
        .doc(postId)
        .collection("comments")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()));
        });
    }
    return () => {
      unsubscribe();
    };
  }, [postId]);

  useEffect(() => {
    if (noLikes) {
      setShow("Liked");
      setShow2("text");
    } else {
      setShow("Like");
      setShow2("");
    }
  }, [postId, userId]);

  const likeHandle = (event) => {
    event.preventDefault();
    if (show === "Like") {
      setShow("Liked");
      setShow2("text");
    } else {
      setShow("Like");
      setShow2("");
    }

    db.collection("posts")
      .doc(postId)
      .get()
      .then((docc) => {
        const data = docc.data();
        console.log(data, "data");
        if (show === "Like") {
          db.collection("posts")
            .doc(postId)
            .collection("likes")
            .doc(userId)
            .get()
            .then((doc2) => {
              if (doc2.data()) {
                console.log(doc2.data());
              } else {
                db.collection("posts")
                  .doc(postId)
                  .collection("likes")
                  .doc(userId)
                  .set({
                    likes: 1,
                  });
                db.collection("posts")
                  .doc(postId)
                  .update({
                    noLikes: (data.noLikes || 0) + 1,
                  });
              }
            });
        } else {
          db.collection("posts")
            .doc(postId)
            .collection("likes")
            .doc(userId)
            .delete()
            .then(function () {
              db.collection("posts")
                .doc(postId)
                .update({
                  noLikes: data.noLikes - 1,
                });
            });
        }
      });
  };

  const postComment = (event) => {
    event.preventDefault();

    db.collection("posts").doc(postId).collection("comments").add({
      text: comment,
      photo: photoURL,
      name: displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setComment("");
  };
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__topinfo">
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>
      <div className="post__bottom">
        <p>{message}</p>
      </div>
      <div className="post__image">
        {image && image.includes("mp4") ? (
          <video src={image} style={{ width: "100%" }} controls></video>
        ) : (
          <img src={image} alt="" />
        )}
      </div>
      <div className="like__count">
        <img
          src={noLikes === 0 || !noLikes ? "" : "./assets/like.png"}
          alt=""
        />
        <span>{noLikes === 0 || !noLikes ? "" : noLikes}</span>
      </div>
      <div className="post__options">
        <div onClick={likeHandle} className="post__option">
          <ThumbUpIcon className={show2} />

          {/* #2078f4 */}
          <p className={show2}>{show}</p>
        </div>
        <div
          onClick={comment === "" ? null : postComment}
          className="post__option"
        >
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div className="post__option">
          <NearMeIcon />
          <p>Share</p>
        </div>
        <div className="post__option">
          <Avatar className="post__option__img" src={profilePic} />
          <ExpandMoreOutlined />
        </div>
      </div>
      {comments.map((comment, index) => (
        <div key={index} className="comments">
          <Avatar className="comment__img" alt="" src={comment.photo} />
          <span className="container__comments">
            <p>{comment.name}</p>
            <p>{comment.text}</p>
          </span>
        </div>
      ))}
      <form onSubmit={postComment}>
        <div className="comment__section">
          <div>
            <Avatar className="comment__img" src={photoURL} />
          </div>
          <div className="comment__input">
            <input
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write a public comment..."
              type="text"
              value={comment}
            />
          </div>
        </div>
        <input
          type="submit"
          disabled={!comment}
          className="transparent__submit"
        />
      </form>
    </div>
  );
}

export default Post;
