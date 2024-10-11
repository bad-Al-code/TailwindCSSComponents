import React from "react";
import { FiArrowLeft } from "react-icons/fi";

interface BackToLoginProps {
  onClick: () => void;
  label?: string;
}

const BackToLogin: React.FC<BackToLoginProps> = ({
  onClick,
  label = "Back to login",
}) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center text-gray-500 hover:underline focus:outline-none"
    >
      <FiArrowLeft className="mr-1" />
      {label}
    </button>
  );
};

export default BackToLogin;
