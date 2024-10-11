import { useState } from "react";
import Button from "../../components/Button";
import PasswordStrengthMeter from "../../components/PasswordStrengthProgressBar";
import FormWrapper from "../../components/forms/FormWrapper";
import Input from "../../components/forms/Input";

const ResetPasswordPage: React.FC = () => {
  const [formData, setFormData] = useState({
    password: "",
  });

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
    <FormWrapper title="Change Password">
      <form onSubmit={handleSubmit}>
        <PasswordStrengthMeter />

        <Input
          label="Confirm Password"
          type="password"
          name="password"
          required
          fullWidth
          value={formData.password}
          onChange={handleInputChange}
        />

        <Button
          type="submit"
          label="Reset Password"
          variant="filled"
          fullWidth
          className="mt-4"
        />
      </form>
    </FormWrapper>
  );
};

export default ResetPasswordPage;
