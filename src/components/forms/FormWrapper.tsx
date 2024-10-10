interface FormWrapperProps {
  title: string;
  children: React.ReactNode;
}

const FormWrapper: React.FC<FormWrapperProps> = ({ title, children }) => {
  return (
    <div className="max-w-md w-full mx-auto p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
        {title}
      </h2>
      {children}
    </div>
  );
};

export default FormWrapper;
