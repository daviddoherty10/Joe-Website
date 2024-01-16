"use server";

import pb from "../../../lib/pocketbase";

interface data{
    oldPassword: string;
    newPassword: string;
    newPasswordConfirm: string;
}

export default async function UseUpdatePassword(id: string, data: data) {
    await pb.collection("users").update(id, {
        "password": data.newPassword,
        "passwordConfirm": data.newPasswordConfirm
    });
}