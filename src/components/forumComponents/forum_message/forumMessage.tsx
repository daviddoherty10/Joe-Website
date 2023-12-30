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
      <div className="forum-message-header">
        <h4 className="forum-message-username">{props.username}</h4>
        <h6 className="forum-message-time">{props.time}</h6>
      </div>
      <div className="forum-message-text">
        <p>{props.message}</p>
      </div>
    </div>
  );
}

export default ForumMessage;
