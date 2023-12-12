"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./forum_input.css";
import useCreateMessage from "../../../hooks/forumHooks/useCreateMessage/useCreateMessage";

interface ForumInputProps {
  src: string;
}

const ForumInput: React.FC<ForumInputProps> = (props) => {
  const { register, handleSubmit, reset } = useForm();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const onSubmit = (data: any) => {
    useCreateMessage(
      { src: "forum" },
      { message: data.message, username: "b1quxg5gvqgxsay" }
    );
    reset();
    setIsButtonDisabled(true);
    setTimeout(() => {
      setIsButtonDisabled(false);
    }, 5000);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} id="message-form">
        <div>
          <input
            type="text"
            placeholder="message"
            {...register("message")}
            id="message-box"
          />
        </div>
        <div>
          <input type="submit" value="send" disabled={isButtonDisabled} />
        </div>
      </form>
    </div>
  );
};

export default ForumInput;
