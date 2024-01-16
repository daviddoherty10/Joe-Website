"use server";

import pb from "../../../lib/pocketbase";

interface data {
  message: string;
  user: string;
  src: string;
}

export default async function UseCreateMessage({ src, message, user }: data) {
  console.log(`User: ${user}, Message: ${message}, Src: ${src}`);
  try {
    await pb.collection(src).create({ "message": message, "user": user });
    console.log(`User: ${user}, Message: ${message}, Src: ${src}`);
  } catch (e) {
    console.error(e);
  }
}
