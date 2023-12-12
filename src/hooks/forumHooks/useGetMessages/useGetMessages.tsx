"use server";

import pb from "../../../lib/pocketbase";

export default async function useGetMessages(src: string) {
  try {
    const fetchedData = await pb.collection(src).getFullList();
    if (fetchedData) {
      return fetchedData;
    }
  } catch (error) {
    console.error(`Error fetching data: ${error}`);
  }
}
