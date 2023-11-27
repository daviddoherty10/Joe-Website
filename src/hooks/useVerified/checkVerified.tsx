"use server";

import pb from "../../lib/pocketbase";
import { redirect } from "next/navigation";

export default async function checkVerified() {
  try {
    const isLoggedIn: boolean = pb.authStore.isValid;
    if (isLoggedIn === true) {
      const id = pb.authStore.model?.id;
      const userData = await pb.collection("users").getOne(id);
      return userData.verified;
    } else {
      redirect("/login");
    }
  } catch (e) {}
}
