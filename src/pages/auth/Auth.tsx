import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../../context";

const Auth: FC = () => {
  const user = useSelector((state: RootState) => state.auth.token);

  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default Auth;
