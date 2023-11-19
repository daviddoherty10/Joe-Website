"use client";
import "./createAccount.css";
import { useForm } from "react-hook-form";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { redirect } from "next/navigation";
import pb from "@/lib/pocketbase";

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

  const onSubmit = async (data: CreateAccountState) => {
    try {
      await pb.collection("users").create(data);
    } catch (error) {
      console.error("Error creating account:", error);
    }
    reset();
  };

  return (
    <>
      <div id="create-acount-container">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>Create Account</h1>
        </div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div id="create-account-form">
              <div id="create-name-surname">
                <FaUser />
                <div
                  style={{
                    marginRight: "20px",
                  }}
                >
                  <input type="text" placeholder="Name" />
                </div>
                <div>
                  <input {...register('name', { required: 'First name is required' })} />
                </div>
              </div>
            </div>
            <div style={{ paddingBottom: "15px" }}>
              <div className="create-name-surname">
                <MdEmail />
                <input {...register('email', { required: 'Email is required' })} />
              </div>
            </div>
            <div className="create-name-surname">
              <div style={{ marginRight: "10px" }}>
                <FaPhoneAlt />
              </div>
              <input {...register('phone', { required: 'Phone is required' })} />
            </div>
            <div id="create-password">
              <div style={{ paddingRight: "10px" }}>
                <FaLock />
              </div>
              <div>
              <input {...register('password', { required: 'Phone is required' })} />
              </div>
              <div>
              <input {...register('passwordConfirm', { required: 'Phone is required' })} />
              </div>
            </div>

            <div id="register-button">
              <input
                type="submit"
                value={"Register"}
                onClick={() => {
                  redirect("create-account/verify-account");
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default CreateAccount;
