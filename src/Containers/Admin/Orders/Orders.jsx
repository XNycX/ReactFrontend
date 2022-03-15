import { connect } from "react-redux";


const Orders = (props) => {
  return (
    <div>
      {props.orders.map((order) => {
        return (
          <div className="order">
            <p>{order.Movie.title}</p>
            <p>{order.User.name}</p>
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
