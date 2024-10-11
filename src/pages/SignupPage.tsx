import { useState } from "react";
import Input from "../components/forms/Input";
import Button from "../components/Button";
import FormWrapper from "../components/forms/FormWrapper";
import Checkbox from "../components/Checkbox";
import PasswordStrengthMeter from "../components/PasswordStrengthProgressBar";

const SignUpFormPage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    termsAccepted: false,
  });

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
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

        <PasswordStrengthMeter />

        <Checkbox
          id="terms"
          label="I accept the "
          linkText="Terms and Conditions"
          linkHref="#"
          checked={formData.termsAccepted}
          onChange={handleCheckboxChange}
          className="mt-4"
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
