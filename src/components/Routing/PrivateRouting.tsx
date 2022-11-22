import React, { Component } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getAuthToken } from "../../utils/getAuthToken";
import Signin from "../AuthComponents/Sigin.component";

interface PrivateRouteProps {
   element: React.ReactNode;
   path: string;
   isAuthenticated: boolean;
}

const PrivateRoute = () => {
    const isAuthenticated = getAuthToken();
    return isAuthenticated != null ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoute;
