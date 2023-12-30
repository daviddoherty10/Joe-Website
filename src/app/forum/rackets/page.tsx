"use client";
import React, { useEffect, useState } from "react";
import ForumInput from "../../../components/forumComponents/forum_input/forum_input";
import ForumMessage from "../../../components/forumComponents/forum_message/forumMessage";
import UseGetMessages from "../../../hooks/forumHooks/UseGetMessages/UseGetMessages";
import pb from "../../../lib/pocketbase";
import ForumCurrentUserMessage from "../../../components/forumComponents/forum_current_user_message/forumCurrentUserMessage";
import "../main.css";

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
      const response: any = await UseGetMessages("rackets");

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
      .collection("rackets")
      .subscribe("*", async function (e: any) {
        const user = await pb.collection("users").getOne(e.record.user);
        e.record.expand = { user: user };
        setMessages((prevMessages) => [...prevMessages, e.record]);
      });

    return () => {
      pb.collection("rackets").unsubscribe(); // Cleanup: Unsubscribe from the collection
    };
  }, []);

  function formatTimestamp(timestamp: string) {
    const date = new Date(timestamp);
    return date.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  return (
    <div className="forum-wrapper">
      <div className="forum-container">
        {messages.map((message: Message) => (
          <div key={message.id}>
            {message.expand?.user?.id === pb.authStore.model?.id ? (
              <ForumCurrentUserMessage
                message={message.message}
                time={formatTimestamp(message.created)}
                username={message.expand?.user?.username}
              />
            ) : (
              <ForumMessage
                message={message.message}
                time={formatTimestamp(message.created)}
                username={message.expand?.user?.username}
              />
            )}
          </div>
        ))}
        <div ref={(el) => el?.scrollIntoView({ behavior: "smooth" })}></div>
      </div>
      <div className="forum-input-container">
        <ForumInput src="rackets" users_id={pb.authStore.model?.id} />
      </div>
    </div>
  );
}

export default Forum;
