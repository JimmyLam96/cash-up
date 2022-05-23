import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import React, { createContext, ReactNode, useContext } from "react";

const UserContext = createContext({} as value);

interface value {
  [key: string]: any;
}

interface props {
  children?: ReactNode;
}

export function UserProvider({ children }: props) {
  const [user, loading, error] = useAuthState(auth);

  const values = {
    user,
    userLoading: loading,
    error,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
}

const useCurrentUser = () => useContext(UserContext);

export default useCurrentUser;
