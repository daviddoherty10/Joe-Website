"use client";
import "./createAccount.css";
import { useForm } from "react-hook-form";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { redirect } from "next/navigation";
import { useState } from "react";
import UseCreateAccount from "../../../hooks/authenticationHooks/UseCreateAccount/UseCreateAccount";

function CreateAccount() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted == true) {
    redirect("/login");
  }
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

  const onSubmit = async (data: CreateAccountState) => {
    try {
      await UseCreateAccount(data);
    } catch (error) {
      console.error("Error creating account:", error);
    }
    reset();
    setSubmitted(true);
  };

  return (
    <>
      <div id="create-acount-container">
        <div>
          <h1>Create Account</h1>
        </div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div id="create-account-form">
              <div id="create-name-surname">
                <FaUser />
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    {...register("name", {
                      required: "First name is required",
                    })}
                    required
                    id="create-account-input"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Surname"
                    {...register("surname", {
                      required: "First name is required",
                    })}
                    id="create-account-input"
                    required
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="create-name-surname">
                <MdEmail />
                <input
                  {...register("email", { required: "Email is required" })}
                  placeholder="Email"
                  required
                  id='create-email'
                />
              </div>
            </div>
            <div className="create-name-surname"></div>
            <div id="create-password">
              <div>
                <FaLock />
              </div>
              <div>
                <input
                  {...register("password", {
                    required: "Password is required",
                  })}
                  placeholder="Password"
                  required
                  id="create-account-input"
                  type="password"
                />
              </div>
              <div>
                <input
                  {...register("passwordConfirm", {
                    required: "Please confirm password",
                  })}
                  placeholder="Confirm Password"
                  required
                  id="create-account-input"
                  type="password"
                />
              </div>
            </div>

            <div id="register-button">
              <input type="submit" value={"Register"} required/>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default CreateAccount;
