'use server';

import pb from "../../lib/pocketbase";

export default async function useSubscribeToMessages(src:string) {
    pb.collection(src).subscribe("*", (message) => {
        return message;
    });
    
}