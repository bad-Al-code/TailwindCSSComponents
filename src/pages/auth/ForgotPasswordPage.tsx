import { useState } from "react";
import Button from "../../components/Button";
import FormWrapper from "../../components/forms/FormWrapper";
import Input from "../../components/forms/Input";
import BackToLogin from "../../components/forms/BackToLogin";

const ForgotPasswordPage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    termsAccepted: false,
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
  const handleBackToLogin = () => {};

  return (
    <FormWrapper title="Forgot your password?">
      <form onSubmit={handleSubmit}>
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

        <div className="flex justify-between items-center w-full mt-4">
          <BackToLogin onClick={handleBackToLogin} />
          <Button type="submit" label="Reset Password" variant="filled" />
        </div>
      </form>
    </FormWrapper>
  );
};

export default ForgotPasswordPage;
