import React, { useState, useEffect } from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import db from "./firebase";
import firebase from "firebase/app";

function Feed() {
  let id = 0;
  const [posts, setPosts] = useState([]);
  const auth = firebase.auth();
  const { uid } = auth.currentUser;
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => {
            return { id: doc.id, data: doc.data() };
          })
        )
      );
  }, []);
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {posts.map((post) => (
        <Post
          userId={uid}
          key={id++}
          postId={post.id}
          noLikes={post.data.noLikes}
          profilePic={post.data.profilePic}
          message={post.data.caption}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.imageUrl}
        />
      ))}
    </div>
  );
}

export default Feed;
