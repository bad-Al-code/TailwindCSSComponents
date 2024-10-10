import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: "filled" | "outline" | "text";
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  variant = "filled",
  icon,
  fullWidth = false,
  className = "",
  ...props
}) => {
  const baseStyles = `px-5 py-2.5 text-sm font-medium rounded-lg transition-transform duration-200 transform active:scale-95 focus:outline-none ${
    fullWidth ? "w-full" : ""
  }`;

  const filledStyles =
    "bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800";
  const outlineStyles =
    "border border-primary-600 text-primary-600 hover:bg-primary-100 active:bg-primary-200";
  const textStyles =
    "text-primary-600 hover:bg-primary-100 active:bg-primary-200";

  let styles;
  switch (variant) {
    case "outline":
      styles = outlineStyles;
      break;
    case "text":
      styles = textStyles;
      break;
    case "filled":
    default:
      styles = filledStyles;
      break;
  }

  return (
    <button className={`${baseStyles} ${styles} ${className}`} {...props}>
      {icon && <span className="mr-2">{icon}</span>} {label}
    </button>
  );
};

export default Button;
