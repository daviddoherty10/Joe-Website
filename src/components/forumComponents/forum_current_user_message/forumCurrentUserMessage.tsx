"use sever";

import "./forumCurrentUserMessage.css";

interface Message {
  username: string;
  message: string;
  time: string;
}

export default function ForumCurrentUserMessage(props: Message) {
  return (
    <div className="current-user-message">
      <div className="forum-message-header">
        <h4 className="forum-message-current-user-username">
          {props.username}
        </h4>
        <h6 className="forum-message-time">{props.time}</h6>
      </div>
      <div className="forum-message-text">
        <p>{props.message}</p>
      </div>
    </div>
  );
}
