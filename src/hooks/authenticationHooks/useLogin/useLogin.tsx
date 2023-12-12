

import pb from "../../../lib/pocketbase";
import { useMutation } from "react-query";

export default function useLogin() {
  interface Login {
    email: string;
    password: string;
  }

  async function login({ email, password }: Login) {
    const authData = await pb
      .collection("users")
      .authWithPassword(email, password);
  }
  return useMutation(login);
}
Server Side Hooks and Create account uses server