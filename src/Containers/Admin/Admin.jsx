import React, { useEffect } from "react";
import { getOrders } from "../../redux/actions/order";
import { Tabs } from "@mantine/core";
import { Settings, Movie } from "tabler-icons-react";
import Orders from "./Orders/Orders";
import "./Admin.css";
import Movies from "./Movies/Movies";
const Admin = () => {
  useEffect(() => {
    getOrders();
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
      </Tabs>
    </div>
  );
};

export default Admin;
