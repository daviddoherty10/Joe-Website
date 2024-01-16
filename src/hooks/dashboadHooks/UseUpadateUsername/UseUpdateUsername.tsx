"use server";

import pb from "../../../lib/pocketbase";

export default async function UseUpdateUsername({ data }: any) {
  await pb.collection("users").update(data);
}
