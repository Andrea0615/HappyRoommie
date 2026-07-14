"use client";

import { PRIVACY_MODAL_CONTENT } from "@/config/content";
import Modal from "./Modal";

interface PrivacyModalProps {
  open: boolean;
  onClose: () => void;
}

export default function PrivacyModal({ open, onClose }: PrivacyModalProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      titleId="privacy-modal-title"
      title={PRIVACY_MODAL_CONTENT.title}
    >
      {PRIVACY_MODAL_CONTENT.body.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
    </Modal>
  );
}
