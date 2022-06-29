import { useAuth } from "../../store/auth-provider";
import { Outlet } from "react-router";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = () => {
  const { currentUser } = useAuth();
  return currentUser ? <Outlet /> : <Navigate to="/login" />;
};



