"use sever";

import "./forum_message.css";

interface Message {
  username: string;
  message: string;
  time: string;
}

function ForumMessage(props: Message) {
  return (
    <div className="forum-message-container">
      <div className="forum-username-time"></div>
      <div className="forum-message-username">
        <h4>{props.username}</h4>
      </div>
      <div className="forum-message-time">
        <h6>{props.time}</h6>
      </div>
      <div className="forum-message-text">
        <p>{props.message}</p>
      </div>
    </div>
  );
}

export default ForumMessage;
