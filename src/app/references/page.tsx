"use client";

import { useEffect } from "react";
import pb from "@/lib/pocketbase";

function References() {
  useEffect(() => {
    async function getReferences() {
      try {
        const ref = await pb.collection("references").getFullList({
          sort: "-created",
        });

        console.log(ref);
      } catch (error) {
        console.error("Error fetching references:", error);
      }
    }

    getReferences();
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return <></>; // Or your actual JSX for the component
}

export default References;
