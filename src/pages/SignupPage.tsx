import { useState } from "react";
import Input from "../components/forms/Input";
import Button from "../components/Button";
import FormWrapper from "../components/FormWrapper";

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
    <FormWrapper title="SignUp">
      <form onSubmit={handleSubmit}>
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
    </FormWrapper>
  );
};

export default SignUpFormPage;
