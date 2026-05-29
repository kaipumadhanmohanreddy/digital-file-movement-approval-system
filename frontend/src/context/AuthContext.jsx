import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

/*
  Authentication Provider

  Stores:
  - User data
  - Token
  - Login/logout state
*/

/*
  Future Improvement:
  Validate token expiration
  during app initialization
*/

export const AuthProvider = ({ children }) => {
  /*
    User State
  */

  const [user, setUser] = useState(null);

  /*
    Loading State
  */

  const [loading, setLoading] = useState(true);

  /*
    Check Token On Refresh
  */

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    setLoading(false);
  }, []);

  /*
    Login Function
  */

  const login = (userData, token) => {
    localStorage.setItem("token", token);

    localStorage.setItem("user", JSON.stringify(userData));

    setUser(userData);
  };

  /*
    Logout Function
  */

  const logout = () => {
    localStorage.removeItem("token");

    localStorage.removeItem("user");

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;