import { Navigate } from "react-router-dom";

const AdminZone = ({ children }) => {
    const user = JSON.parse(localStorage.getItem("redux_localstorage_simple_credentials"));
  return user?.user?.role === 'admin' ? children : <Navigate to="/" />;
};

export default AdminZone;