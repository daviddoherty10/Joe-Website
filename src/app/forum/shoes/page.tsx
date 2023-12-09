"use client";
import React, { useEffect, useState } from "react";
import ForumInput from "../../../components/forum_input/forum_input";
import Forum_message from "../../../components/forum_message/forum_message";
import pb from "../../../lib/pocketbase";

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
    const fetchData = async () => {
      try {
        const fetchedData = await pb.collection("shoes").getList(1, 50);
        const transformedMessages =
          fetchedData.items?.map((item: any) => ({
            id: item.id,
            text: item.message,
            created: item.created,
            username: item.username,
          })) || [];

        setMessages(transformedMessages);
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
          <Forum_message
            message={message.text}
            time={message.created}
            Username={message.username}
          />
        </div>
      ))}

      <ForumInput src="shoes" />
    </div>
  );
}

export default Forum;
