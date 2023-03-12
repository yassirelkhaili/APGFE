import { Navigate, Outlet} from "react-router-dom";
import { useContext } from "react";
import { TokenContext } from "./TokenContext";

const PrivateRoutes = () => {
  const {token} = useContext(TokenContext)
  return (
    token === "success" ? <Outlet /> : <Navigate to="/auth" />
  )
};

export default PrivateRoutes;
