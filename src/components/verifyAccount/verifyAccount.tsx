"use client";

import { useEffect } from "react";
import pb from "@/lib/pocketbase";
import { useRouter } from "next/navigation";
import useVerified from "@/hooks/useVerified";

interface User {
  id: string;
  verified: boolean;
  // Add other necessary properties
}

function VerifyAccount() {
  const router = useRouter();
  const isLoggedIn: boolean = pb.authStore.isValid;

  useEffect(() => {
    if (isLoggedIn === false) {
      router.push("/create-account");
    }
  }, [isLoggedIn, router]);

  const { isVerified, requestVerification } = useVerified();

  useEffect(() => {
    if (isVerified === true) {
      router.push("/store");
    }
  }, [isVerified, router]);

  async function handleVerificationRequest(): Promise<void> {
    await requestVerification();
    // Perform any other actions after requesting verification if needed
  }

  async function handleVerificationCheck(): Promise<void> {
    const userIsVerified = await checkUserVerificationStatus();
    if (userIsVerified === true) {
      router.push("/store");
    } else {
      console.log("User is not verified.");
    }
  }

  async function checkUserVerificationStatus(): Promise<boolean> {
    const id = pb.authStore.model?.id;
    const user: User | null = await pb.collection("users").getOne(id);
    return user?.verified || false;
  }

  return (
    <>
      <div>
        <div>
          <h1>Verify Email</h1>
        </div>
        <div>
          <button onClick={handleVerificationRequest}>
            Send Verification Email
          </button>
        </div>
        <div>
          <button onClick={handleVerificationCheck}>I have Verified</button>
        </div>
      </div>
    </>
  );
}

export default VerifyAccount;

