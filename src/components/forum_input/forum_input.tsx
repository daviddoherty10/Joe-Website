"use client";
import React from "react";
import { useForm } from "react-hook-form";
import pb from "../../lib/pocketbase";
import "./forum_input.css";

interface ForumInputProps {
  src: string;
}

const ForumInput: React.FC<ForumInputProps> = (props) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data: any) => {
    pb.collection(props.src).create(data);
    reset();
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
          <input type="submit" value="send" />
        </div>
      </form>
    </div>
  );
};

export default ForumInput;
