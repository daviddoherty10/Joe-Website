"use client";

import React from "react";
import "./createAccount.css";
import { useForm } from "react-hook-form";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

function CreateAccount() {
  interface createAccount {
    name: string;
    surname: string;
    email: string;
    phone: string;
    password: string;
  }

  const { register, handleSubmit, reset } = useForm<createAccount>();
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
          <form>
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
                  <input type="text" placeholder="Surname" />
                </div>
              </div>
            </div>
            <div style={{ paddingBottom: "15px" }}>
              <div className="create-name-surname">
                <MdEmail />
                <input type="text" placeholder="Email" />
              </div>
            </div>
            <div className="create-name-surname">
              <div style={{ marginRight: "10px" }}>
                <FaPhoneAlt />
              </div>
              <input type="text" placeholder="Phone" />
            </div>
            <div id="create-password">
              <div style={{ paddingRight: "10px" }}>
                <FaLock />
              </div>
              <div>
                <input type="password" placeholder="Password" />
              </div>
              <div>
                <input type="password" placeholder="Re-type Password" />
              </div>
            </div>

            <div id="register-button">
              <input
                type="submit"
                value={"Register"}
                onClick={handleSubmit()}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default CreateAccount;
