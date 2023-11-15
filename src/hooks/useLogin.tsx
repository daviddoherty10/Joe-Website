import { useState } from "react";
import pb from "@/lib/pocketbase";

export default function useLogin() {
  interface Login {
    email: string;
    password: string;
  }

  const [isLoading, setLoading] = useState(false);

  async function login({ email, password }: Login) {
    setLoading(true);
    try {
      const authData = await pb
        .collection("users")
        .authWithPassword(email, password);
    } catch (e) {
      alert(e);
    }
    setLoading(false);
  }

  return { login, isLoading };
}
