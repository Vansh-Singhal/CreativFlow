import { Navigate } from "react-router-dom";
import MainLayout from "@/components/shared/MainLayout";
import Loginform from "@/components/auth/Loginform";

const Login = () => {
  const user = null;
  const loading = false;
  
  // If user is already logged in, redirect to dashboard
  if (user && !loading) {
    return <Navigate to="/dashboard" replace />;
  }
  
  return (
    <MainLayout>
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="w-full max-w-md">
          <Loginform />
        </div>
      </div>
    </MainLayout>
  );
};

export default Login;