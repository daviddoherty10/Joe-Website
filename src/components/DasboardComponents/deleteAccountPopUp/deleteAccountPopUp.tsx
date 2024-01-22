"use client";

import "./deleteAccountPopUp.css";
import pb from "../../../lib/pocketbase";
import { redirect } from "next/navigation";

interface DeleteAccountModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export default function DeleteAccountModal({
  isOpen,
  onClose,
}: DeleteAccountModalProps) {
  if (!isOpen) return null;

  const onConfirmDelete = async () => {
    try {
      // Assuming 'user' is the user record you want to delete
      const userId = pb.authStore.model?.id;

      // Find and update/delete all records in other collections
      // that are required to reference this user record.
      // Example: pb.collection("anotherCollection").update(...)
      // or pb.collection("anotherCollection").delete(...)

      // After handling the references, delete the user record
      if (userId) {
        await pb.collection("users").delete(userId);
        pb.authStore.clear();
        onClose();
        redirect("/login");
      }
    } catch (error) {
      console.error("Failed to delete user:", error);
      // Handle the error, possibly by notifying the user
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Confirm Account Deletion</h2>
        <p>
          Are you sure you want to delete your account? This action cannot be
          undone.
        </p>

        <div className="modal-actions">
          <button onClick={onClose} className="cancel-button">
            Cancel
          </button>
          <button onClick={onConfirmDelete} className="delete-button">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}
