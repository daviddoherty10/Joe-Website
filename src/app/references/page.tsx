"use server";

import pb from "../../lib/pocketbase";

async function References() {
  try {
    const ref = await pb.collection("references").getFullList({
      sort: "-created",
    });

    console.log(ref);

    return (
      <>
        <div>{}</div>
      </>
    ); // Or your actual JSX for the component
  } catch (error) {
    console.error("Error fetching references:", error);
    return null;
  }
}

export default References;
