import { useState, useEffect } from "react";
import pb from "@/lib/pocketbase";

export default function useVerified() {
  const [isVerified, setVerified] = useState(false);

  useEffect(() => {
    async function checkVerified() {
      const id = pb.authStore.model?.id;

      const userData = await pb.collection("users").getOne(id);
      setVerified(userData.verified);
    }

    const isLoggedIn = pb.authStore.isValid;
    if (isLoggedIn) {
      checkVerified();
    }
  }, []);

  async function checkVerified() {
    const email = await pb.authStore.model?.email;
    const res = await pb.collection("users").requestVerification(email);
    if (res) {
      alert("Verification email sent");
    }
  }

  return { isVerified };
}
