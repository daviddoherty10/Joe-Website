"use client";

import DeleteAccountModal from "../deleteAccountPopUp/deleteAccountPopUp";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";
import pb from "../../../lib/pocketbase";
import { useState } from "react";
import Image from "next/image";
import "./dashboard.css";

export default function Dashboard() {
  const user = pb.authStore?.model;

  if (!user) {
    redirect("/login");
  }

  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const { register, handleSubmit, reset } = useForm();

  const handleAvatarChange =  () => {};

  const handleSubmitPassword = () => {};

  const handleSubmitAvatar = () => {};

  const handleSubmitUsername = async () => {
    pb.collection('users').update(user?.id, { 'username':  })
  };

  return (
  <>
    <div className="user-settings">
      <div className="profile-section">
        {/*<Image
          src={user?.avatar}
          alt={`${user?.username}'s avatar`}
          className="avatar"
  />*/}
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

        <div>
          <button onClick={openModal} className="delete-account">
            Delete My Account
          </button>
          <DeleteAccountModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
      </div>
    </div>
    </>
  );
}
