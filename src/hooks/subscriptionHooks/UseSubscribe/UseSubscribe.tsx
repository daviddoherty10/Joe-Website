"use server";

import pb from "../../../lib/pocketbase";

export default async function UseSubscribe(id: string, plan: string, ) {
    await pb.collection("users").update(id, { 'subscription': plan, 'lastPayment': new Date().getDate()});
}