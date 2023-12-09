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

async function Forum() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await pb.collection("drills").getList(1, 50);
        if (Array.isArray(fetchedData.items)) {
          const transformedMessages: Message[] = fetchedData.items.map(
            (item: any) => ({
              id: item.id,
              text: item.message,
              created: item.created,
              username: item.username,
            })
          );

          setMessages(transformedMessages); // Update state here after data fetching
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const renderedMessages = messages.map((message) => (
    <div key={message.id}>
      <ForumMessage
        message={message.text}
        time={message.created}
        Username={message.username}
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
