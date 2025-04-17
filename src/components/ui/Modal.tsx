import { useEffect, ReactNode } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

const Modal = ({ children, onClose }: ModalProps) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Animation variants for the modal
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const contentVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: 50, opacity: 0 },
  };

  return createPortal(
      <motion.div
        className="modal modal__overlay"
        onClick={onClose}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={overlayVariants}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="modal__content"
          onClick={(e) => e.stopPropagation()}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={contentVariants}
          transition={{ duration: 0.3 }}
        >
          {children}
          <button className="modal__close" onClick={onClose}>
            <i className="ri-close-line"></i>
          </button>
        </motion.div>
      </motion.div>,
    document.getElementById("__next")!,
  );
};

export default Modal;
