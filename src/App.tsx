import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

const App: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <SignupPage />
      <LoginPage />
    </div>
  );
};

export default App;
