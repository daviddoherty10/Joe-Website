"use server";

import pb from "../../../lib/pocketbase";

export default async function UseDeleteUser(id: string) {
  try {
    await pb.collection("users").delete(id);
  } catch (e) {}
}
