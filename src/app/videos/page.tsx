"use client";
import pb from "../../lib/pocketbase";
import { redirect } from "next/navigation";

export default function page() {
  if (pb.authStore.isValid === false) {
    redirect("/login");
  }
  return (
    <>
      <div>
        <h1>Videos</h1>
      </div>
    </>
  );
}
