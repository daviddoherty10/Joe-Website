"use client";
import React, { useEffect, useState } from "react";
import ForumInput from "../../components/forumComponents/forum_input/forum_input";
import ForumMessage from "../../components/forumComponents/forum_message/forumMessage";
import useGetMessages from "../../hooks/forumHooks/useGetMessages/useGetMessages";
import pb from "../../lib/pocketbase";

interface Message {
  message: string;
  created: string;
  username: string;
  id: string;
}

function Forum() {
  const [messages, setMessages] = useState<Message[]>([]);

  async function fetchData() {
    try {
      const response: any = await useGetMessages("forum");
      setMessages(response ?? []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData(); // Invoke fetchData inside useEffect
  }, []); // Empty dependency array ensures it runs once on mount

  useEffect(() => {
    const subscription = pb
      .collection("forum")
      .subscribe("*", function (e: any) {
        setMessages((prevMessages) => [...prevMessages, e.record]);
      });

    return () => {
      pb.collection("forum").unsubscribe(); // Cleanup: Unsubscribe from the collection
    };
  }, []);

  return (
    <div>
      {messages.map((message) => (
        <div key={message.id}>
          <ForumMessage
            message={message.message}
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
