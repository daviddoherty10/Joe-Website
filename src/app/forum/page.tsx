"use client";
import React, { useEffect, useState } from "react";
import ForumInput from "../../components/forumComponents/forum_input/forum_input";
import ForumMessage from "../../components/forumComponents/forum_message/forumMessage";
import useGetMessages from "../../hooks/forumHooks/useGetMessages/useGetMessages";
import pb from "../../lib/pocketbase";
import "./main.css";

interface Message {
  message: string;
  created: string;
  username: string;
  id: string;
  expand?: any;
}

function Forum() {
  const user_id: string = pb.authStore.model?.id;
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
      .subscribe("*", async function (e: any) {
        const user = await pb.collection("users").getOne(e.record.user);
        e.record.expand = { user: user };
        setMessages((prevMessages) => [...prevMessages, e.record]);
      });

    return () => {
      pb.collection("forum").unsubscribe(); // Cleanup: Unsubscribe from the collection
    };
  }, []);

  return (
    <div className="forum-container">
      {messages.map((message) => (
        <div key={message.id}>
          <ForumMessage
            message={message.message}
            time={message.created}
            username={message.expand?.user?.username || ""} // Added a fallback value for username
          />
          <div ref={(el) => el?.scrollIntoView({ behavior: "smooth" })}></div>
        </div>
      ))}

      <ForumInput src="forum" users_id={user_id} />
    </div>
  );
}

export default Forum;
