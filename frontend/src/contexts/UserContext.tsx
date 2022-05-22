import { auth } from "../firebase";
import { onAuthStateChanged, User } from "firebase/auth";
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
  const [user, setUser] = useState<User | null>();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    console.log(localStorage);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        return setLoggedIn(true);
      }
      setUser(null);
      setLoggedIn(false);
    });
    return () => unsubscribe();
  }, [user]);

  const values = {
    loggedIn,
    setLoggedIn,
    user,
    setUser,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
}

const useCurrentUser = () => useContext(UserContext);

export default useCurrentUser;
