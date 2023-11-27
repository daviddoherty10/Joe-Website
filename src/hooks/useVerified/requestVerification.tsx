'use server';
import pb from "../../lib/pocketbase";

export default async function requestVerification() {
    const email = pb.authStore.model?.email;
    if (email) {
      const res = await pb.collection("users").requestVerification(email);
      if (res) {
        return `Verification Email Sent. Check ${email}`;
      }
    }
    return requestVerification;
  }
