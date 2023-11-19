import { useState, useEffect } from "react";
import pb from "@/lib/pocketbase";

interface UserData {
  verified: boolean;
  // Add other properties based on your user data model
}

export default function useVerified() {
  const [isVerified, setVerified] = useState<boolean>(false);

  useEffect(() => {
    async function fetchUserData() {
      const isLoggedIn: boolean = pb.authStore.isValid;

      if (isLoggedIn) {
        const id: string | undefined = pb.authStore.model?.id;
        if (id) {
          const userData: UserData | undefined = await pb.collection("users").getOne(id);

          if (userData) {
            setVerified(userData.verified);
          }
        }
      }
    }

    fetchUserData();
  }, []);

  return { isVerified };
}

