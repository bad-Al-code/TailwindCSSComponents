import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
import LoginPage from "./pages/auth/LoginPage";
import ResetPasswordPage from "./pages/auth/ResetPasswordPage";
import SignupPage from "./pages/auth/SignupPage";
import OtpVerificationPage from "./pages/auth/OTPVerificationPage";

const App: React.FC = () => {
  return (
    <div className="flex flex-wrap  items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800 p-6">
      <SignupPage />
      <OtpVerificationPage />
      <LoginPage />
      <ForgotPasswordPage />
      <ResetPasswordPage />
    </div>
  );
};

export default App;
