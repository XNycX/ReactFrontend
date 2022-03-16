import { connect } from "react-redux";
import {Card,Text} from "@mantine/core";


const Orders = (props) => {
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
