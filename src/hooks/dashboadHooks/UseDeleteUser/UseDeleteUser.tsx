"use server";

import pb from "../../../lib/pocketbase";

export default function UseDeleteUser(id: string) {
  pb.collection("users").delete(id);
}
