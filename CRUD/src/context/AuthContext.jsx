import { createContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebase";

export const Context = createContext();

export function AuthContext({ children }) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let unsubcribe;
    unsubcribe = onAuthStateChanged(auth, (currenUser) => {
      setLoading(false);
      if (currenUser) setUser(currenUser);
      else {
        setUser(null);
      }
    });
    return () => {
      if (unsubcribe) unsubcribe();
    };
  }, []);

  const values = {
    user: user,
    setUser: setUser,
  };

  return (
    <Context.Provider value={values}>{!loading && children}</Context.Provider>
  );
}
