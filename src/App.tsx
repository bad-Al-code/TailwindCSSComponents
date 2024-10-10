import React from "react";
import Input from "./components/forms/Input";
import Button from "./components/Button";

const App: React.FC = () => {
  return (
    <>
      <Input
        label="Your email"
        type="email"
        name="email"
        placeholder="name@company.com"
        required
      />

      <Input
        label="Your password"
        type="password"
        name="password"
        placeholder="••••••••"
        required
        className="mt-4"
      />

      <Button
        label="Create an account"
        variant="filled"
        fullWidth
        className="mt-4"
      />
    </>
  );
};

export default App;
