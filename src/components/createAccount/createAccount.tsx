"use client";
import "./createAccount.css";
import { useForm } from "react-hook-form";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { redirect } from "next/navigation";
import { useState } from "react";
import pb from "../../lib/pocketbase";

function CreateAccount() {
  interface CreateAccountState {
    username: string;
    name: string;
    surname: string;
    email: string;
    phone: number;
    password: string;
    emailVisibility: boolean;
    passwordConfirm: string;
  }

  const { register, handleSubmit, reset } = useForm<CreateAccountState>();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data: CreateAccountState) => {
    try {
      await pb.collection("users").create(data);
    } catch (error) {
      console.error("Error creating account:", error);
    }
    reset();
    setSubmitted(true);
  };

  if (submitted == true) {
    redirect("/login");
  }

  return (
    <>
      <div id="unique-create-acount-container">
      <div>
        <h1>Create Account</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div id="unique-create-account-form">
            <div id="unique-create-name-surname">
              <FaUser />
              <div>
                <input type="text" placeholder="Name" />
              </div>
              <div>
                <input
                  {...register('name', {
                    required: 'First name is required',
                  })}
                />
              </div>
            </div>
          </div>
          <div>
            <div className="unique-create-name-surname">
              <MdEmail />
              <input
                {...register('email', { required: 'Email is required' })}
              />
            </div>
          </div>
          <div className="unique-create-name-surname">
            <div>
              <FaPhoneAlt />
            </div>
            <input
              {...register('phone', { required: 'Phone is required' })}
            />
          </div>
          <div id="unique-create-password">
            <div>
              <FaLock />
            </div>
            <div>
              <input
                {...register('password', { required: 'Password is required' })}
              />
            </div>
            <div>
              <input
                {...register('passwordConfirm', {
                  required: 'Please confirm password',
                })}
              />
            </div>
          </div>

          <div id="unique-register-button">
            <input type="submit" value={'Register'} />
          </div>
        </form>
      </div>
    </div>
    </>
  );
}
export default CreateAccount;
