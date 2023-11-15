"use client";

import React from "react";
import "./createAccount.css";

function CreateAccount() {
  return (
    <>
      <div id="create-acount-container">
        <h1>Create Account</h1>
        <div>
          <form>
            <div id="create-account-form">
              <div id="create-name-surname">
                <div
                  style={{
                    marginRight: "20px",
                  }}
                >
                  <h4>Name</h4>
                  <input type="text" />
                </div>
                <div>
                  <h4>Surname</h4>
                  <input type="text" />
                </div>
              </div>
            </div>
            <div>
              <h4>Email</h4>
              <input type="text" />
            </div>
            <div>
              <h4>Phone</h4>
              <input type="text" />
            </div>
            <div id="create-password">
              <div style={{ paddingRight: "20px" }}>
                <h4>Password</h4>
                <input type="password" />
              </div>
              <div>
                <h4>Re-Enter Password</h4>
                <input type="password" />
              </div>
            </div>

            <div id="register-button">
              <input
                type="submit"
                value={"Register"}
                onClick={(e) => {
                  e.preventDefault();
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
