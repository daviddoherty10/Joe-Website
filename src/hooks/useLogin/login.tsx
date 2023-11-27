"use server";
import pb from "../../lib/pocketbase";

interface Login {
  email: string;
  password: string;
}

export default async function login({ email, password }: Login) {
    return await pb.collection("users").authWithPassword(email, password);
    // Handle successful authentication
}
