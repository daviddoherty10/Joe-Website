"use client";
import React, { useEffect, useState } from "react";
import ForumInput from "../../../components/forumComponents/forum_input/forum_input";
import Forum_message from "../../../components/forumComponents/forum_message/forumMessage";
import useGetMessages from "../../../hooks/forumHooks/useGetMessages/useGetMessages";

interface Message {
  text: string;
  created: string;
  username: string;
  id: string;
}
/**
 * Forum component renders a list of messages from the "shoes" collection
 * and provides an input field for users to add new messages.
 */
function Forum() {
  const [messages, setMessages] = useState<Message[]>([]);

  /**
   * Fetches the messages from the "shoes" collection and updates the state.
   */
  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const Firstmessages = await useGetMessages("shoes");
        setMessages(Firstmessages ?? []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataAsync();
  }, []);

  return (
    <div>
      {messages.map((message) => (
        <div key={message.id}>
          <Forum_message
            message={message.text}
            time={message.created}
            username={message.username}
          />
        </div>
      ))}

      <ForumInput src="shoes" />
    </div>
  );
}

export default Forum;
