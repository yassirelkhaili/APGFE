import { Navigate, Outlet} from "react-router-dom";
import { useContext } from "react";
import { TokenContext } from "./TokenContext";

const PrivateRoutes = () => {
  const {loginResponse} = useContext(TokenContext)
  return (
    loginResponse === "login_success" ? <Outlet /> : <Navigate to="/auth" />
  )
};

export default PrivateRoutes;
