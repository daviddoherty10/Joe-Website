"use client";
import React, { useEffect, useState } from "react";
import ForumInput from "../../../components/forum_input/forum_input";
import ForumMessage from "../../../components/forum_message/forum_message";
import pb from "../../../lib/pocketbase";

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

  useEffect(() => {
    /**
     * Fetches messages from the "rackets" collection and updates the state with the transformed messages.
     */
    const fetchData = async () => {
      try {
        const fetchedData = await pb.collection("rackets").getList(1, 50);

        if (Array.isArray(fetchedData.items)) {
          const transformedMessages: Message[] = fetchedData.items.map((item: any) => ({
            id: item.id,
            text: item.message,
            created: item.created,
            username: item.username,
          }));

          setMessages(transformedMessages);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {messages.map((message) => (
        <div key={message.id}>
          <ForumMessage
            message={message.text}
            time={message.created}
            Username={message.username}
          />
        </div>
    ))}

      <ForumInput src="rackets" />
    </div>
  );
}

export default Forum;
