import React, { useEffect } from "react";
import { getUsers } from "../../../redux/actions/user";
import Users from "../../../Components/Users/Users";
import './AdminUsers.css';
const AdminUsers = (props) => {
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="designUser">
    <div className="designRooster">
      <Users />
      </div>
      </div>
  );
};
export default AdminUsers;
