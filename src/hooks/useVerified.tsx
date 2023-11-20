import { useState, useEffect } from "react";
import pb from "@/lib/pocketbase";

interface UserData {
  verified: boolean;
  // Add other properties based on your user data model
}

export default function useVerified() {
  const [isVerified, setVerified] = useState<boolean>(false);
  

  useEffect(() => {
    async function checkVerified() {
      const isLoggedIn: boolean = pb.authStore.isValid;
      const id = pb.authStore.model?.id;
      const userData = await pb.collection("users").getOne(id);
      setVerified(userData.verified);
    }

    const isLoggedIn = pb.authStore.isValid;
    if (isLoggedIn) {
      checkVerified();
    }
  }, []);

  async function requestVerification(){
    const email = pb.authStore.model?.email;
    const res = await pb.collection("users").requestVerification(email);
    if (res){
      return <><h4>Verification Email Sent. Check {email}</h4></>
    }
  }


  return { isVerified, requestVerification };
}
