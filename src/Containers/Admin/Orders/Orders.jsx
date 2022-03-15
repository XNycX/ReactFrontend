import { connect } from "react-redux";


const Orders = (props) => {
  return (
    <div>
      {props.orders.map((order) => {
        return (
          <div className="order">
            <p>Title: {order.Movie.title}</p>
            <p>User: {order.User.name}</p>
            <p>Rent date: {order.date_rent}</p>
            <p>Return date: {order.date_return}</p>
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
