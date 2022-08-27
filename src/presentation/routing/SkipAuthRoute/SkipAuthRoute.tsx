import { Navigate, Outlet } from 'react-router-dom';

type PropsType = {
  isAuthenticated: boolean;
};

const SkipAuthRoute = ({ isAuthenticated }: PropsType) => {
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default SkipAuthRoute;
