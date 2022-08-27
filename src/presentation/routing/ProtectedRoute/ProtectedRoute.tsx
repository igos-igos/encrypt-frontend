import { Navigate, Outlet } from 'react-router-dom';

type PropsType = {
  isAuthenticated: boolean;
};

const ProtectedRoute = ({ isAuthenticated }: PropsType) => {
  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
