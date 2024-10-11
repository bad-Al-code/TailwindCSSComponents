import React from "react";

interface LoginPromptProps {
  onLoginClick: () => void;
}

const LoginPrompt: React.FC<LoginPromptProps> = ({ onLoginClick }) => {
  return (
    <div className="flex justify-start  mt-4">
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Already have an account?{" "}
        <button
          onClick={onLoginClick}
          className="font-medium text-primary-600 hover:underline dark:text-primary-500 focus:outline-none"
        >
          Login here
        </button>
      </p>
    </div>
  );
};

export default LoginPrompt;
