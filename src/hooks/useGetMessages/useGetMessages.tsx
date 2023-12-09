"use server";

import pb from "../../lib/pocketbase";

export default async function fetchData(src: string) {
  try {
    const fetchedData = await pb.collection(src).getList(1, 50);
    if (Array.isArray(fetchedData.items)) {
      const transformedMessages = fetchedData.items.map((item: any) => ({
        id: item.id,
        text: item.message, // change 'message' to 'text'
        created: item.created,
        username: item.username,
      }));
      return transformedMessages;
    }
  } catch (error) {
    console.error(`Error fetching data: ${error}`);
  }
}
