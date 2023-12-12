"use client";
import React, { useEffect, useState } from "react";
import ForumInput from "../../../components/forumComponents/forum_input/forum_input";
import ForumMessage from "../../../components/forumComponents/forum_message/forumMessage";
import useGetMessages from "../../../hooks/forumHooks/useGetMessages/useGetMessages";

interface Message {
  text: string;
  created: string;
  username: string;
  id: string;
}

function Forum() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const Firstmessages = await useGetMessages("drills");
        setMessages(Firstmessages ?? []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataAsync();
  }, []);

  const renderedMessages = messages.map((message) => (
    <div key={message.id}>
      <ForumMessage
        message={message.text}
        time={message.created}
        username={message.username}
      />
    </div>
  ));

  return (
    <div>
      {renderedMessages}
      <ForumInput src="drills" />
    </div>
  );
}

export default Forum;
