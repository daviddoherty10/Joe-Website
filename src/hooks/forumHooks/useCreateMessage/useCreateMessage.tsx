"use server";

import pb from "../../../lib/pocketbase";

interface props {
  src: string;
}

interface data {
  message: string;
  username: string;
}

export default async function useCreateMessage(props: props, data: data) {
  await pb.collection(props.src).create(data);
}
