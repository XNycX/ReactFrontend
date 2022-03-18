import { connect } from "react-redux";
import { Card, Text } from "@mantine/core";
import { useNotifications } from "@mantine/notifications";
import { deleteOrder } from "../../../redux/actions/order";
import { Check } from "tabler-icons-react";
import "./Orders.css";


const Orders = (props) => {
  const notifications = useNotifications();
  const onSubmit = async (id) => {
    try {
      const res = await deleteOrder(id);
      if (res) {
        notifications.showNotification({
          message: "Order successfully deleted",
          icon: <Check />,
          autoClose: 2000,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="orders">
      {props.orders.map((order) => {
        return (
          <div className="order">
            <Card
                shadow="sm"
                component="a">
                <Text size="sm">
            <p>Title: {order.Movie.title}</p>
            <p>User: {order.User.name}</p>
            <p>Price: {order.Movie.price}€</p>
            <p>Rent date: {order.date_rent}</p>
                <p>Return date: {order.date_return}</p>
                <div onClick={() => onSubmit(order.Movie.id)} className="deleteButton">Delete</div>
                </Text>
              </Card>
          </div>
          
        );
        
      })}
    </div>
  
  );
};



const mapStateToProps = (state) => ({
  orders: state.orders.orders,
});
export default connect(mapStateToProps)(Orders);
