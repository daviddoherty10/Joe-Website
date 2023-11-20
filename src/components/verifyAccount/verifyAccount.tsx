"use client";

import useVerified from "@/hooks/useVerified";
import { useEffect } from "react";
import pb from "@/lib/pocketbase";
import { useRouter } from 'next/navigation'

function VerifyAccount() {
  const { isVerified, requestVerification } = useVerified();

  const router = useRouter();

  useEffect(() => {
    if (isVerified === true) {
      return router.push('/store');
    }
  }, [isVerified]);

  async function handleVerificationRequest() {
    await requestVerification();
    // Perform any other actions after requesting verification if needed
  }

  async function handleVerificationCheck() {
    // Logic to check if the user is verified
    // Assuming you have a function in your useVerified hook for this purpose
    const userIsVerified = await checkUserVerificationStatus();
    if (userIsVerified === true) {
      return router.push('/store')
    } else {
      // Handle the case where the user is not verified
      console.log("User is not verified.");
    }
  }

  async function checkUserVerificationStatus() {
    // Logic to query the database or perform checks for user verification status
    // Use the necessary data from your useVerified hook or other sources
    // Example: const user = await pb.collection("users").get(/* Query */);
    // Example: return user?.verified || false;

    // For the sake of an example, assuming user.verified is a boolean indicating verification status
    // Replace this with your database query logic
    const id = pb.authStore.model?.id;
    const user = await pb.collection("users").getOne(id);
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
