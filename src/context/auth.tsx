import { createContext, useContext, useState } from "react";

interface isLogged {
  loggedIn: boolean;
  setLoggedIn: any;
}

const DefaultValues: isLogged = {
  loggedIn: false,
  setLoggedIn: () => null,
};

const AuthContext = createContext<isLogged>(DefaultValues);

const AuthProvider = ({ children }: any) => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
