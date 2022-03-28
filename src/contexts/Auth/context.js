import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ShowToast } from "../../components";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [response, setResponse] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const userToken = localStorage.getItem("UserToken");
  const navigate = useNavigate();

  useEffect(() => {
    if (userToken) {
      setLoggedIn(true);
    }
  }, [userToken]);

  const checkUserLogin = () => {
    useEffect(() => {
      if (!userToken) {
        navigate("../login");
      }
    }, []);
  };

  const logoutHandler = () => {
    localStorage.removeItem("UserToken");
    setLoggedIn(false);
    ShowToast("You are Logged Out", "success");
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{ response, setResponse, checkUserLogin, logoutHandler, loggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
