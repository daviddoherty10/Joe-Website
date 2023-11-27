"use client";
import React, { useEffect, useState } from "react";
import pb from "../../lib/pocketbase";

interface ForumInputProps {
  src: string;
}

interface Message {
  id: number;
  text: string;
  // Add more properties as needed
}

const ForumInput: React.FC<ForumInputProps> = (props) => {
  const [messages, setMessages] = useState<Message[]>([]);

  // Existing code...
  // Define your local RecordModel interface
  interface LocalRecordModel {
    id: number;
    text: string;
    // Add other properties as needed
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await pb.collection(props.src).getList(1, 50);
        if (Array.isArray(fetchedData.items)) {
          const transformedMessages: any = fetchedData.items.map((item) => {
            return {
              id: item.id,
              text: item.message, // Check if item.text contains the correct value
              // Add more properties as needed
            };
          });
          console.log(transformedMessages);
          setMessages(transformedMessages);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [props.src]);

  // Rest of your component code...

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Logic to handle form submission (sending messages, etc.)
  };

  return (
    <>
      {messages.map((message) => {
        return (
          <div key={message.id}>
            {message.id} {message.text}
          </div>
        );
      })}

      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <input type="text" placeholder="message" />
          </div>
          <div>
            <input type="submit" value="send" />
          </div>
        </form>
      </div>
    </>
  );
};

export default ForumInput;
