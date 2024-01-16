"use server";

import pb from "../../../lib/pocketbase";

export default async function UseUpdateSubscription(id:string, plan:string) {
    await pb.collection('users').update(id, { 'subscription': plan });
}