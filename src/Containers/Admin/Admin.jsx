import React, { useEffect } from "react";
import { getOrders } from "../../redux/actions/order";
import { Tabs } from "@mantine/core";
import { Settings, Movie, User } from "tabler-icons-react";
import Orders from "./Orders/Orders";
import "./Admin.css";
import Movies from "./AdminMovies/AdminMovies";
import Users from "./AdminUsers/AdminUsers";
import { getUsers } from "../../redux/actions/user";
const Admin = () => {
  useEffect(() => {
    getOrders();
    getUsers();
  }, []);

  return (
    <div className="admin-container">
      <Tabs>
        <Tabs.Tab label="Orders" icon={<Settings size={14} />}>
          <Orders />
        </Tabs.Tab>
        <Tabs.Tab label="Movies" icon={<Movie size={14} />}>
         <Movies/>
        </Tabs.Tab>
        <Tabs.Tab label="Users" icon={<User size={14} />}>
       <Users/>
        </Tabs.Tab>
      </Tabs>
    </div>
  );
};

export default Admin;
