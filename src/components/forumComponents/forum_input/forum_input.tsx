"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import pb from "../../../lib/pocketbase";
import "./forum_input.css";

interface Props {
  src: string;
}

const ForumInput = (props: Props) => {
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
      try {
        await pb.collection(props.src).create({ "message": data.message, "user": pb.authStore.model?.id });
      } catch (e) {}
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
