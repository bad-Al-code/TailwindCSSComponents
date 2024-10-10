// src/App.tsx

import React from "react";
import Button from "./components/Button";

const App: React.FC = () => {
  const handleCreateAccount = () => {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Welcome
      </h1>
      <Button
        label="Create an account"
        variant="filled"
        // icon={<IconUserPlus />} // Add the icon
        onClick={handleCreateAccount} // Attach click handler
      />
      <Button
        label="Login"
        variant="outline"
        // icon={<IconUserPlus />} // Optional: Add an icon for another button
        // onClick={() => alert("Login clicked!")} // Attach click handler
        className="mt-4" // Optional: Additional classes for spacing
      />
      <Button
        label="Learn More"
        variant="text"
        onClick={() => alert("Learn More clicked!")}
        className="mt-4"
      />
    </div>
  );
};

export default App;
