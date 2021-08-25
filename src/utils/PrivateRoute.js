import { Route, Redirect } from "react-router-dom"
import { useAuth } from "../Context/AuthProvider"

export default function PrivateRoute({path,...props}) {
  const { currentUser } = useAuth();
  return (
      <>
        { currentUser ? <Route path={path}>{props.children}</Route> : <Redirect to="/"></Redirect>}
      </>
  );
}