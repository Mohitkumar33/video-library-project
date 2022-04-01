import { createContext, useContext } from "react";

const authContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState(false);
  return (
    <authContext.Provider value={{ authState, setAuthState }}>
      {children}
    </authContext.Provider>
  );
};

const useAuth = () => useContext(authContext);

export { useAuth, AuthProvider };
