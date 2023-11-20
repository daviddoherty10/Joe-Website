"use client";

import "./login.css";
import { BiUser } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";
import pb from "@/lib/pocketbase";
import useLogin from "@/hooks/useLogin";
import { useEffect } from "react";

interface LoginData {
  email: string;
  password: string;
}

function Login() {
  const { mutate: login, isLoading, isError } = useLogin();

  const isLoggedIn = pb.authStore.isValid;

  const { register, handleSubmit, reset } = useForm<LoginData>();

  const onSubmit = async (data: LoginData) => {
    await login({ email: data.email, password: data.password });
    reset();
  };

  useEffect(() => {
    if (isLoggedIn) {
      redirect("/create-account/verify-account"); // Redirect if user is logged in
    }
  }, [isLoggedIn]);

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
              placeholder=" Username"
              {...register("email")}
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
            />
          </div>
          <div id="unique-login-form-container">
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </div>
          <div className="unique-error-message">
            {isError && <p style={{ color: "red" }}>Invalid email or password</p>}
          </div>
        </form>
      </div>
    </div>
    </>
  );
}

export default Login;
