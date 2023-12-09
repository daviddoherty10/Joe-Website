"use sever";

import "./forum_message.css";

interface Message {
  username: string;
  message: string;
  time: string;
}

function ForumMessage(props: Message) {
  return (
    <div>
      <div>
        <div>
          <h4>{props.username}</h4>
        </div>
      </div>
      <div>
        <p>{props.message}</p>
      </div>
      <div>
        <h6>{props.time}</h6>
      </div>
      <div>
        <p>{props.message}</p>
      </div>
    </div>
  );
}

export default ForumMessage;
