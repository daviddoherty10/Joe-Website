"use server";

import pb from "../../../lib/pocketbase";

interface data {
  username: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export default async function UseCreateAccount(data: data) {
  await pb.collection("users").create(data);
}
