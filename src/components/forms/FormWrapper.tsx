interface FormWrapperProps {
  title: string;
  children: React.ReactNode;
}

const FormWrapper: React.FC<FormWrapperProps> = ({ title, children }) => {
  return (
    <div className="space-y-4 md:space-y-6 max-w-md w-full mx-auto p-6 bg-white rounded-lg shadow-md border border-gray-300 dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <h2 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        {title}
      </h2>
      {children}
    </div>
  );
};

export default FormWrapper;
