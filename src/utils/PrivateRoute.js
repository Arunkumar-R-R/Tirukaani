import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../Context/AuthProvider";
import React from "react";

export default function PrivateRoute({ ...props }) {
  const { currentUser } = useAuth();
  return (
    <>
      {currentUser !== null ? (
        <>{props.children}</>
      ) : (
        <Redirect to="/"></Redirect>
      )}
    </>
  );
}
