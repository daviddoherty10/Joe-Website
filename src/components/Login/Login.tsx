"use client";

import { BiUser } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";
import pb from "@/lib/pocketbase";
import useLogin from "@/hooks/useLogin";
import "./login.css";

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

  if (isLoggedIn) {
    redirect("/store");
  }

  return (
    <>
      <div id="login-container">
        <div id="login-head">
          <h1>Login</h1>
        </div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <BiUser />
              <input
                type="text"
                id="input-username"
                placeholder=" Username"
                {...register("email")}
              />
            </div>
            <div>
              <RiLockPasswordLine />
              <input
                id="input-password"
                type="password"
                placeholder=" Password"
                {...register("password")}
              />
            </div>
            <div>
              <div id="login-form-container">
                <button type="submit" disabled={isLoading}>
                  {isLoading ? "Logging in..." : "Login"}
                </button>
              </div>
              <div>
                <h5
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {isError && (
                    <p style={{ color: "red" }}>Invalid email or password</p>
                  )}
                </h5>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
