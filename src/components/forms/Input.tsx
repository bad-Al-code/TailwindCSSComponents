interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;

  type?: string;
  name?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
  fullWidth?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  type = "text",
  name,
  placeholder,
  required = false,
  className = "",
  fullWidth = true,
  ...props
}) => {
  const baseStyles =
    "bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2.5";
  const darkModeStyles =
    "dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <div className="mb-4">
      {label && (
        <label
          htmlFor={name}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        id={name}
        className={`${baseStyles} ${darkModeStyles} ${className} ${widthClass}`}
        placeholder={placeholder}
        required={required}
        {...props}
      />
    </div>
  );
};

export default Input;
