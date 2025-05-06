import React, { useEffect, useState, useRef } from "react";
import useTrackUserSource from "../../hooks/useTrackUserSource";
import LeadModal from "./leadmodal";

const LeadModalManager = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const hasOpenedOnce = useRef(false);
  const initialTimeout = useRef(null);
  const reopenTimeout = useRef(null);

  const visitData = useTrackUserSource() || {};

  // Check form submission status from localStorage
  const hasFormBeenSubmitted = useRef(
    localStorage.getItem("leadFormSubmitted") === "true"
  );

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
  }, [isModalOpen]);

  useEffect(() => {
    if (!hasFormBeenSubmitted.current) {
      initialTimeout.current = setTimeout(() => {
        if (!hasOpenedOnce.current) {
          openModal();
        }
      }, 15000);
    }

    return () => {
      clearTimeout(initialTimeout.current);
      clearTimeout(reopenTimeout.current);
    };
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
    hasOpenedOnce.current = true;
  };

  const closeModal = () => {
    setIsModalOpen(false);

    if (!hasFormBeenSubmitted.current) {
      reopenTimeout.current = setTimeout(() => {
        setIsModalOpen(true);
      }, 15000);
    }
  };

  const handleFormSubmit = () => {
    hasFormBeenSubmitted.current = true;
    localStorage.setItem("leadFormSubmitted", "true");
    setIsModalOpen(false);
  };

  return (
    <LeadModal
      isOpen={isModalOpen}
      onClose={closeModal}
      onSubmit={handleFormSubmit}
      visitData={visitData}
    />
  );
};

export default LeadModalManager;
