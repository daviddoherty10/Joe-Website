"use client";
import { useState, useEffect } from "react";
import ForumInput from "../../components/forum_input/forum_input";
import ForumMessage from "../../components/forum_message/forum_message";
import fetchData from "../../hooks/useGetMessages/useGetMessages";
interface Message {
  text: string;
  created: string;
  username: string;
  id: string;
}

function Forum(): JSX.Element {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const fetchDataAsync = async () => {
      const Firstmessages = await fetchData("forum");
      setMessages(Firstmessages || []);
    };

    fetchDataAsync();
  }, []);

  

  return (
    <div>
      {messages.map((message) => (
        <div key={message.id}>
          <ForumMessage
            message={message.text}
            time={message.created}
            username={message.username}
          />
        </div>
      ))}
      <ForumInput src="forum" />
    </div>
  );
}

export default Forum;
