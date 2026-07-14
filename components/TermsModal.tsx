"use client";

import { TERMS_MODAL_CONTENT } from "@/config/content";
import Modal from "./Modal";

interface TermsModalProps {
  open: boolean;
  onClose: () => void;
}

export default function TermsModal({ open, onClose }: TermsModalProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      titleId="terms-modal-title"
      title={TERMS_MODAL_CONTENT.title}
    >
      {TERMS_MODAL_CONTENT.body.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
    </Modal>
  );
}
