import { onAuthStateChanged } from "firebase/auth";
import React, { createContext } from "react";
import { auth } from "../firebase-config";

interface Iauth {
  checkAuth: any;
}
export const authContext = createContext({} as Iauth);

const AuthState: React.FC = (props) => {
  const checkAuth = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Active User: ", user);

        return user;
      } else {
        console.log("No active user.");
        return undefined;
      }
    });
  };
  return (
    <authContext.Provider value={{ checkAuth }}>
      {props.children}
    </authContext.Provider>
  );
};

export default AuthState;
