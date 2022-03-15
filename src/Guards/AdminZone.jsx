import { Navigate } from "react-router-dom";

const AdminZone = ({ children }) => {
    const user = JSON.parse(localStorage.getItem("redux_localstorage_simple_credentials"));
    console.log(user)
  return user?.user.role === 'admin' ? children : <Navigate to="/" />;
};

export default AdminZone;