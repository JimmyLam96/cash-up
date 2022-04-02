import React, { createContext, ReactNode, useContext, useState } from "react";

const UserContext = createContext({} as value);

interface value {
  [key: string]: any;
}

interface props {
  children?: ReactNode;
}

export function UserProvider({ children }: props) {
  const [user, setUser] = useState();
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();

  const values = {
    user,
    setUser,
    accessToken,
    refreshToken,
    setAccessToken,
    setRefreshToken,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
}

const useCurrentUser = () => useContext(UserContext);

export default useCurrentUser;
