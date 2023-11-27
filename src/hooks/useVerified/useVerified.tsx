import { useState, useEffect } from "react";
import pb from "../../lib/pocketbase";
import checkVerified from "./checkVerified";
import requestVerification from "./requestVerification";

interface UserData {
  verified: boolean;
  // Add other properties based on your user data model
}

export default function useVerified() {
  const [isVerified, setVerified] = useState<boolean>(false);

  useEffect(() => {
    function fetchData() {
      if (pb.authStore.isValid) {
        checkVerified();
        setVerified(true);
      }

      fetchData();
    }
  }, []);

  return { isVerified, requestVerification };
}
