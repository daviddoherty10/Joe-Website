"use client";

import "./login.css";
import pb from "../../../lib/pocketbase";
import useLogin from "../../../hooks/authenticationHooks/useLogin/useLogin";
import { BiUser } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import checkVerified from "../../../hooks/authenticationHooks/useVerified/checkVerified";
import { redirect } from "next/navigation";

interface LoginData {
  email: string;
  password: string;
}

function Login() {
  // Assuming useLogin returns a promise.
  const { mutate: login, isLoading, isError } = useLogin();

  // Remove the explicit comparison since isLoggedIn is already a boolean.
  if (pb.authStore.isValid) {
    redirect("/store");
  }

  const { register, handleSubmit, reset } = useForm<LoginData>();

  const onSubmit = async (data: LoginData) => {
    try {
      // Call the login function with await to handle the promise.
      await login({ email: data.email, password: data.password });
      redirect("/store");
    } catch (error) {
      // Handle the error case if login fails.
      console.error("Login failed:", error);
    }
    reset();
  };

  useEffect(() => {
    // Immediately invoked async function to handle the promise.
    (async () => {
      const isVerified = await checkVerified();
      if (isVerified) {
        redirect("/store");
      }
      // The else clause has been removed since it's empty.
    })();
  }, [pb.authStore.isValid]); // Assuming this dependency is reactive.

  // The rest of the component remains the same.

  return (
    <>
      <div id="unique-login-container">
        <div id="unique-login-head">
          <h1>Login</h1>
        </div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <BiUser />
              <input
                type="text"
                id="input-username"
                className="unique-input"
                placeholder=" Email"
                {...register("email")}
                required
              />
            </div>
            <div>
              <RiLockPasswordLine />
              <input
                id="input-password"
                className="unique-input"
                type="password"
                placeholder=" Password"
                {...register("password")}
                required
              />
            </div>
            <div id="unique-login-form-container">
              <button type="submit" disabled={isLoading}>
                {isLoading ? "Logging in..." : "Login"}
              </button>
            </div>
            <div className="unique-error-message">
              {isError && (
                <p style={{ color: "red" }}>Invalid email or password</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
