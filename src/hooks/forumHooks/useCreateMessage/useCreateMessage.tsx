"use server";

import pb from "../../../lib/pocketbase";

interface data {
  message: string;
  user: string;
  src: string;
}

export default async function UseCreateMessage({ src, message, user }: data) {
  try {
    await pb.collection(src).create({ "message": message, "user": user });
  } catch (e) {
    console.error(e);
  }
}
