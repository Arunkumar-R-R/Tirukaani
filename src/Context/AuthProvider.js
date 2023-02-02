import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../utils/firebase";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const userLocal = JSON.parse(localStorage.getItem("user"));
  const [currentUser, setCurrentUser] = useState(userLocal);

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  //it runs only once
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        localStorage.setItem("user", true);
        setCurrentUser(user);
      } else {
        localStorage.removeItem("user");
        setCurrentUser(false);
      }
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
