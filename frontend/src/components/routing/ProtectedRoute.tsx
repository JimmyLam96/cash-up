import ThreeDotsWave from "components/animations/ThreeDotsWave";
import useCurrentUser from "contexts/UserContext";
import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute: FC = () => {
  const { user, userLoading } = useCurrentUser();

  if (userLoading) {
    return (
      <div className="flex flex-col w-full h-screen items-center justify-center">
        <ThreeDotsWave />
        <p>Loading</p>
      </div>
    );
  }

  return user ? <Outlet /> : <Navigate to="/signin" />;
};

export default ProtectedRoute;
