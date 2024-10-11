import { useState } from "react";
import Input from "../components/forms/Input";
import Button from "../components/Button";
import FormWrapper from "../components/forms/FormWrapper";
import Checkbox from "../components/Checkbox";
import PasswordStrengthMeter from "../components/PasswordStrengthProgressBar";
import AuthPrompt from "../components/forms/AuthPrompt";

const SignupPage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    termsAccepted: false,
  });

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      termsAccepted: checked,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLoginClick = () => {
    console.log("Navigate to Login Page");
  };

  return (
    <FormWrapper title="SignUp">
      <form onSubmit={handleSubmit}>
        <Input
          label="Name"
          type="name"
          name="name"
          placeholder="Name"
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

        <PasswordStrengthMeter />

        <Checkbox
          id="terms"
          label="I accept the "
          linkText="Terms and Conditions"
          linkHref="#"
          required
          checked={formData.termsAccepted}
          onChange={handleCheckboxChange}
          className="mt-2"
        />

        <Button
          type="submit"
          label="Create an account"
          variant="filled"
          fullWidth
          className="mt-4"
        />

        <AuthPrompt
          actionText="Login"
          onActionClick={handleLoginClick}
          promptText="Already have an account?"
        />
      </form>
    </FormWrapper>
  );
};

export default SignupPage;
