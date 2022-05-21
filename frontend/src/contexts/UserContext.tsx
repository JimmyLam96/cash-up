import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

const UserContext = createContext({} as value);

interface value {
  [key: string]: any;
}

interface props {
  children?: ReactNode;
}

export function UserProvider({ children }: props) {
  const [user, setUser] = useState();
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setAccessToken(localStorage.getItem("accessToken"));
      setRefreshToken(localStorage.getItem("refreshToken"));
      setLoggedIn(true);
    } else if (sessionStorage.getItem("accessToken")) {
      setAccessToken(sessionStorage.getItem("accessToken"));
      setRefreshToken(sessionStorage.getItem("refreshToken"));
      setLoggedIn(true);
    }
  }, []);

  const values = {
    loggedIn,
    setLoggedIn,
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
