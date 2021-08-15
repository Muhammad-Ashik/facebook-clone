import React from "react";
import Story from "./Story";
import "./StoryReel.css";
function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        profileSrc="./assets/i1.webp"
        image="./assets/i1.webp"
        title="Adrian Ahsin"
      />
      <Story
        image="./assets/i2.jpg"
        profileSrc="./assets/i2.jpg"
        title="Maria"
      />
      <Story
        image="./assets/i3.jpg"
        profileSrc="./assets/i3.jpg"
        title="Angela"
      />
      <Story
        image="./assets/i4.jpg"
        profileSrc="./assets/i4.jpg"
        title="Edward Kenway"
      />
      <Story
        image="./assets/i5.jpg"
        profileSrc="./assets/i5.jpg"
        title="Sheuly Akter"
      />
    </div>
  );
}

export default StoryReel;
