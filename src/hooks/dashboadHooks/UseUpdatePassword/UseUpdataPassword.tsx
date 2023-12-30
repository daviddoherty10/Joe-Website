"use server";

import pb from "../../../lib/pocketbase";

interface data{
    oldPassword: string;
    newPassword: string;
    newPasswordConfirm: string;
    user: [];
}

export default async function UseUpdatePassword(data: data) {
    
}