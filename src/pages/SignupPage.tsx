import { useState } from "react";
import Input from "../components/forms/Input";
import Button from "../components/Button";

const SignUpFormPage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md w-full mx-auto p-6 bg-white rounded-lg shadow-md dark:bg-gray-800"
    >
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
        Sign Up
      </h2>

      <Input
        label="Name"
        type="name"
        name="name"
        required
        fullWidth
        value={formData.name}
        onChange={handleInputChange}
      />

      <Input
        label="Your Email"
        type="email"
        name="email"
        placeholder="email@gmail.com"
        required
        fullWidth
        value={formData.email}
        onChange={handleInputChange}
      />

      <Input
        label="Password"
        type="password"
        name="password"
        placeholder=""
        required
        fullWidth
        value={formData.password}
        onChange={handleInputChange}
      />
      <Button
        type="submit"
        label="Create an account"
        variant="filled"
        fullWidth
        className="mt-4"
      />
    </form>
  );
};

export default SignUpFormPage;
