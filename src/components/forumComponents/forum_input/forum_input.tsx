"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./forum_input.css";
import useCreateMessage from "../../../hooks/forumHooks/useCreateMessage/useCreateMessage";
import pb from "../../../lib/pocketbase";

const ForumInput = (props: any) => {
  const { register, handleSubmit, reset } = useForm();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const signedIn = pb.authStore.isValid;

  useEffect(() => {
    if (signedIn === false) {
      setIsButtonDisabled(true);
    }
  }, [signedIn]);

  const onSubmit = async (data: any) => {
    const id: string = props.users_id;

    if (signedIn != undefined) {
      useCreateMessage(
        { src: props.src },
        { message: data.message, user: id }
      );
      reset();
      setIsButtonDisabled(true);
      setTimeout(() => setIsButtonDisabled(false), 5000);
    } else {
      alert("You must be logged in to post a message");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div id="message-form">
        <div id="message-box-container">
          <input
            type="text"
            placeholder="Message"
            {...register("message")}
            id="message-box"
            autoFocus
          />
        </div>
        <div id="send-button-container">
          <input
            type="submit"
            value="Send"
            id="send-button"
            disabled={isButtonDisabled}
          />
        </div>
      </div>
    </form>
  );
};

export default ForumInput;
