import { Navigate, Outlet} from "react-router-dom";

const PrivateRoutes = () => {
  const loginResponse = JSON.parse(localStorage.getItem("auth"))
  return (
    loginResponse === "login_success" ? <Outlet /> : <Navigate to="/auth" />
  )
};

export default PrivateRoutes;
