"use client";

import pb from "../../../lib/pocketbase";

interface data {
  message: string;
  user: string;
  src: string;
}

export default async function UseCreateMessage({ src, message, user }: data) {
  try {
    pb.collection(src).create({ message: message, user: user });
  } catch (e) {
    console.error(e);
  }
}
