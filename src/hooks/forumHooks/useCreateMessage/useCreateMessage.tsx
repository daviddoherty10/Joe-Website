"use server";

import pb from "../../../lib/pocketbase";

interface props {
  src: string;
}

interface data {
  message: string;
  user: string;
}

export default async function useCreateMessage(props: props, data: data) {
  try {
    await pb.collection(props.src).create(data);
  } catch (e) {
    console.error(e);
  }
}
