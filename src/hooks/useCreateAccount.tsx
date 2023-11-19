// useCreateAccount hook
import { useEffect } from "react";
import pb from "@/lib/pocketbase";

interface CreateAccountData {
  username: string;
  name: string;
  surname: string;
  email: string;
  phone: number;
  password: string;
  emailVisibility: boolean;
  passwordConfirm: string;
}

function useCreateAccount(data: CreateAccountData): void {
  useEffect(() => {
    const createAccount = async (): Promise<void> => {
      try {
        await pb.collection("users").create(data);
      } catch (error) {
        console.error("Error creating account:", error);
      }
    };

    createAccount();
  }, [data]);
}

export default useCreateAccount;

