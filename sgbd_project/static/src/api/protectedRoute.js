import React from "react";
import { Navigate } from "react-router";
import tokenService from "../api/tokenService";

const ProtectedRoute = ({children}) => {
   return tokenService.itslogged() ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;