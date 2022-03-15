import { Navigate } from "react-router-dom";

const PrivateZone = ({ children }) => {
  const user = localStorage.getItem("redux_localstorage_simple_credentials");
  return user ? children : <Navigate to="/login" />;
};

export default PrivateZone;