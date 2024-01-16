"use server";

import pb from "../../../lib/pocketbase";

export default async function UseIsSubscribed(id:string) {
    const subcription = await pb.collection("users").getOne(id).then((res)=> res.subscription);

    switch(subcription){
        case "free" || "N/A":
            return false;
        case "monthly":
            return true;
        case "annual":
            return true;
    }    
}