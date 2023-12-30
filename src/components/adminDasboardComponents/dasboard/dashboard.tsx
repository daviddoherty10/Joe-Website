"use client";

import "./dashboard.css";
import { useState, useEffect } from "react"; // Make sure to create a corresponding CSS file
import pb from "../../../lib/pocketbase";
import UseDeleteUser from "../../../hooks/dashboadHooks/UseDeleteUser/UseDeleteUser";
import { redirect } from "next/navigation";
import Image from "next/image";
import DeleteAccountModal from "../deleteAccountPopUp/deleteAccountPopUp";

export default function Dashboard() {
  const user = pb.authStore?.model;

  useEffect(() => {
    if (!user) {
      redirect("/login");
    }
  }, [user]);

  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const [username, setUsername] = useState("");

  const handlePasswordChange = () => {};

  const handleAvatarChange = () => {};

  const handleUsernameChange = () => {};

  const handleSubmitPassword = () => {};

  const handleSubmitAvatar = () => {};

  const handleSubmitUsername = () => {};

  const handleDeletion = async () => {
    console.log("user.id", user?.id);
    await pb.collection("users").delete(user?.id);
    redirect("/login");
  };

  return (
    <div className="user-settings">
      <div className="profile-section">
        <Image
          src={user?.avatar}
          alt={`${user?.username}'s avatar`}
          className="avatar"
        />
        <h2>{user?.username}</h2>
        <p>{user?.email}</p>
      </div>

      <div className="settings-section">
        <form
          onSubmit={handleSubmitAvatar}
          className="form-avatar"
          id="dashboard-form"
        >
          <label htmlFor="avatar">Update Avatar</label>
          <input type="file" id="avatar" onChange={handleAvatarChange} />
          <button type="submit">Upload</button>
        </form>

        <form onSubmit={handleSubmitUsername} className="form-username">
          <label htmlFor="username">Change Username</label>
          <input type="text" id="username" />
          <button type="submit">Update</button>
        </form>

        <form onSubmit={handleSubmitPassword} className="form-password">
          <label htmlFor="password">Change Password</label>
          <input type="password" id="password" />
          <button type="submit">Update</button>
        </form>

        <button onClick={openModal} className="delete-account">
          Delete My Account
        </button>

        <div>
          <button onClick={openModal} className="delete-account">
            Delete My Account
          </button>
          <DeleteAccountModal
            isOpen={isModalOpen}
            onClose={closeModal}
          />
        </div>
      </div>
    </div>
  );
}
