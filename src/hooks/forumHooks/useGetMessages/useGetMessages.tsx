"use server";

import pb from "../../../lib/pocketbase";

export default async function useGetMessages(src: string) {
  try {
    const fetchedData = await pb.collection(src).getList(1, 40, {
      sort: "created",
      expand: "user",
      cache: "no-cache",
    });

    if (fetchedData) {
      return fetchedData.items;
    }
  } catch (error) {
    console.error(`Error fetching data: ${error}`);
  }
}
