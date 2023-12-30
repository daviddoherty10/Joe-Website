"use client";
import UseCreateMessage from "../../../hooks/forumHooks/UseCreateMessage/UseCreateMessage";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import pb from "../../../lib/pocketbase";
import "./forum_input.css";

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
    if (signedIn != undefined) {
      UseCreateMessage({
        src: props.src,
        message: data.message,
        user: props.users_id,
      });
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
        <input
          type="text"
          placeholder="Message"
          {...register("message")}
          id="message-box"
          autoFocus
        />
        <input
          type="submit"
          value="Send"
          id="send-button"
          disabled={isButtonDisabled}
        />
      </div>
    </form>
  );
};

export default ForumInput;
