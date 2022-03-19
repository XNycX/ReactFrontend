import React, { useEffect } from "react";
import { getUsers } from "../../../redux/actions/user";
import Users from "../../../Components/Users/Users";
import "./AdminUsers.css";
const AdminUsers = (props) => {
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="designUser">
        <Users />
    </div>
  );
};
export default AdminUsers;
