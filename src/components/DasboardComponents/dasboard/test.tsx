"use client";

import DeleteAccountModal from "../deleteAccountPopUp/deleteAccountPopUp";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";
import pb from "../../../lib/pocketbase";
import { useState } from "react";
import "./dashboard.css";

export default function Dashboard() {
  const user = pb.authStore?.model;

  if (!user) {
    redirect("/login");
  }

  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  // Initialize useForm for avatar form
  const {
    register: registerAvatar,
    handleSubmit: handleSubmitAvatar,
    reset: resetAvatar,
  } = useForm();

  // Initialize useForm for username form
  const {
    register: registerUsername,
    handleSubmit: handleSubmitUsername,
    reset: resetUsername,
  } = useForm();

  // Initialize useForm for password form
  const {
    register: registerPassword,
    handleSubmit: handleSubmitPassword,
    reset: resetPassword,
  } = useForm();

  const handleAvatarChange = () => {};

  const onSubmitAvatar = async (data: any) => {
    // Handle avatar update
  };

  const onSubmitUsername = async (data: any) => {
    const { username } = data;
    await pb.collection("users").update(user?.id, { username });
    resetUsername();
  };

  const onSubmitPassword = async (data: any) => {
    // Handle password update
  };

  return (
    <div className="dashboard-container">
      <div className="user-settings-container">
        <div className="profile-section">
          {/* Uncomment and update the Avatar component if needed
      <Avatar
        src={user?.avatar}
        alt={`${user?.username}'s avatar`}
        className="avatar"
      /> */}
          <h2 className="username">{user?.username}</h2>
          <p className="email">{user?.email}</p>
        </div>
        <div className="settings-section">
          <form
            onSubmit={handleSubmitAvatar(onSubmitAvatar)}
            className="form-avatar"
            id="dashboard-form"
          >
            <label htmlFor="avatar">Update Avatar</label>
            <input
              {...registerAvatar("avatar")}
              type="file"
              id="avatar"
              onChange={handleAvatarChange}
              className="input-file"
            />
            <button type="submit" className="button">
              Upload
            </button>
          </form>

          <form
            onSubmit={handleSubmitUsername(onSubmitUsername)}
            className="form-username"
          >
            <label htmlFor="username">Change Username</label>
            <input
              {...registerUsername("username")}
              type="text"
              id="username"
              className="input-field"
            />
            <button type="submit" className="button">
              Update
            </button>
          </form>

          <form
            onSubmit={handleSubmitPassword(onSubmitPassword)}
            className="form-password"
          >
            <label htmlFor="password">Change Password</label>
            <input
              {...registerPassword("password")}
              type="password"
              id="password"
              className="input-field"
            />
            <button type="submit" className="button">
              Update
            </button>
          </form>

          <div>
            <button onClick={openModal} className="delete-account">
              Delete My Account
            </button>
            <DeleteAccountModal isOpen={isModalOpen} onClose={closeModal} />
          </div>
        </div>
      </div>
    </div>
  );
}
