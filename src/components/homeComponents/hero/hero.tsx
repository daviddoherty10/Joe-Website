"use client";

import React from "react";
import ReactPlayer from "react-player";
import "./hero.css";

export default function Hero(){
  return (
    <div className="hero-section">
      <div className="video-wrapper">
        <ReactPlayer
          url="your-video-url.mp4" // Replace with your video URL
          playing={true}
          loop={true}
          muted={true}
          width="100%"
          height="100%"
          style={{ position: "absolute", top: 0, left: 0 }}
        />
      </div>
      <div className="content">
        {/* Your other content goes here */}
        <h1>Your Title</h1>
        <p>Your description</p>
      </div>
    </div>
  );
};

