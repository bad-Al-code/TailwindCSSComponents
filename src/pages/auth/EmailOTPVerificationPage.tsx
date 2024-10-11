import React, { useState } from "react";
import Button from "../../components/Button";
import FormWrapper from "../../components/forms/FormWrapper";
import Input from "../../components/forms/Input";

const OtpVerificationPage: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const [isOtpInvalid, setIsOtpInvalid] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;

    // If input is not a number or if input length > 1, don't accept it
    if (/[^0-9]/.test(value) || value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Automatically move to the next input if a digit is entered
    if (value) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) (nextInput as HTMLInputElement).focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    const { key } = e;

    if (key === "Backspace") {
      if (otp[index] === "") {
        const prevInput = document.getElementById(`otp-${index - 1}`);
        if (prevInput) (prevInput as HTMLInputElement).focus();
      }
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const otpCode = otp.join("");
    if (otpCode !== "123456") {
      // Mock OTP verification
      setIsOtpInvalid(true);
    } else {
      setIsOtpInvalid(false);
      // Proceed to the next step after verification
    }
  };

  const handleResendOtp = () => {
    alert("OTP resent!");
  };

  return (
    <FormWrapper title="Verify Your Email">
      <form onSubmit={handleSubmit}>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Please enter the 6-digit code sent to your email address.
        </p>
        <div className="flex space-x-2 justify-center mt-4">
          {otp.map((digit, index) => (
            <Input
              key={index}
              id={`otp-${index}`}
              type="text"
              value={digit}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              maxLength={1}
              className="w-12 h-12 text-center text-xl border border-gray-300 rounded-md focus:outline-none dark:border-gray-600"
            />
          ))}
        </div>

        {isOtpInvalid && (
          <p className="text-red-500 text-sm mt-2">
            Invalid OTP, please try again.
          </p>
        )}

        <div className="flex justify-between w-full mt-4">
          <button
            type="button"
            onClick={handleResendOtp}
            className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Resend OTP
          </button>
          <Button type="submit" label="Verify" variant="filled" />
        </div>
      </form>
    </FormWrapper>
  );
};

export default OtpVerificationPage;
