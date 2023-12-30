"use client";

import "./deleteAccountPopUp.css";
import pb from "../../../lib/pocketbase";
// Ensure the CSS file exists
interface DeleteAccountModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const DeleteAccountModal: React.FC<DeleteAccountModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const onConfirmDelete = () => {
    pb.collection("users").delete(pb.authStore.model?.id);
    onClose();
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
};

export default DeleteAccountModal;
