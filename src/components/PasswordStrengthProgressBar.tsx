import { FaCheck } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import React, { useState } from "react";
import Input from "./forms/Input";

interface Requirement {
  re: RegExp;
  label: string;
}

const requirements: Requirement[] = [
  { re: /[0-9]/, label: "Includes number" },
  { re: /[a-z]/, label: "Includes lowercase letter" },
  { re: /[A-Z]/, label: "Includes uppercase letter" },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: "Includes special symbol" },
];

function getStrength(password: string): number {
  if (password.length < 5) {
    return 10;
  }

  let multiplier = password.length > 5 ? 0 : 1;

  requirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1;
    }
  });

  return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10);
}

function getStrengthColor(strength: number): string {
  switch (true) {
    case strength < 30:
      return "bg-red-500";
    case strength < 50:
      return "bg-orange-500";
    case strength < 70:
      return "bg-yellow-500";
    default:
      return "bg-green-500";
  }
}

const PasswordStrengthMeter: React.FC = () => {
  const [password, setPassword] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const strength = getStrength(password);
  const strengthColor = getStrengthColor(strength);

  return (
    <div className="max-w-md mx-auto mt-6">
      <Input
        label="Enter Password"
        name="Password"
        type="password"
        value={password}
        required
        onChange={(event) => setPassword(event.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="Enter Password"
      />

      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isFocused ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex justify-between gap-2 mt-2">
          <div className="w-full h-1 bg-gray-300">
            <div
              className={`h-1 ${password.length > 0 ? strengthColor : ""}`}
              style={{ width: "100%" }}
            />
          </div>
          <div className="w-full h-1 bg-gray-300">
            <div
              className={`h-1 ${strength < 30 ? "" : strengthColor}`}
              style={{ width: strength < 30 ? "0%" : "100%" }}
            />
          </div>
          <div className="w-full h-1 bg-gray-300">
            <div
              className={`h-1 ${strength < 50 ? "" : strengthColor}`}
              style={{ width: strength < 50 ? "0%" : "100%" }}
            />
          </div>
          <div className="w-full h-1 bg-gray-300">
            <div
              className={`h-1 ${strength < 70 ? "" : strengthColor}`}
              style={{ width: strength < 70 ? "0%" : "100%" }}
            />
          </div>
        </div>

        <ul className="mt-4 text-sm text-gray-300">
          gin
          {requirements.map((req, index) => (
            <li key={index} className="flex items-center">
              <span
                className={`mr-2 ${
                  req.re.test(password) ? "text-green-500" : "text-red-500"
                }`}
              >
                {req.re.test(password) ? <FaCheck /> : <IoMdClose />}
              </span>
              {req.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PasswordStrengthMeter;
