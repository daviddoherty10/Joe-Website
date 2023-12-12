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

/**
 * Fetches messages from the "rackets" collection and displays them in a forum.
 * Also provides a forum input for users to post new messages.
 */
function Forum() {
  const [messages, setMessages] = useState<Message[]>([]);

  /**
   * Fetches messages from the "rackets" collection and updates the state with the transformed messages.
   */
  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const Firstmessages = await useGetMessages("rackets");
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
          <ForumMessage
            message={message.text}
            time={message.created}
            username={message.username}
          />
        </div>
      ))}

      <ForumInput src="rackets" />
    </div>
  );
}

export default Forum;
