interface CheckboxProps {
  id: string;
  label: string;
  checked?: boolean;
  className?: string;
  linkText?: string;
  linkHref?: string;
  required?: boolean;

  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  checked,
  onChange,
  className = "",
  linkText,
  linkHref,
  required = false,
}) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex items-center h-5">
        <input
          id={id}
          aria-describedby={id}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          required={required}
          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800  checked:bg-primary-600"
        />
      </div>
      <div className="ml-3  text-sm">
        <label
          htmlFor={id}
          className="font-light text-gray-500 dark:text-gray-300"
        >
          {label}{" "}
          <a
            href={linkHref}
            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            {linkText}
          </a>
        </label>
      </div>
    </div>
  );
};

export default Checkbox;
