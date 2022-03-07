import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import { LOGOUT } from "../../redux/types";
import { connect } from "react-redux";

const Header = (props) => {
  let navigate = useNavigate();

  useEffect(() => {
    console.log(props.user);
  });

  const logOut = () => {
    //Borrar de RDX las credenciales
    props.dispatch({ type: LOGOUT });

    setTimeout(() => {
      navigate("/");
    }, 1500);
  };
  return (
    <nav className="header">
      <span>Header</span>
      <div>
        <span>
          <Link to="/">Home</Link>
        </span>
        {props.user ? (
          <>
            <span>
              <Link to="/profile">{props.user.username}</Link>
            </span>
            <span>Logout</span>
          </>
        ) : (
          <>
            <span>
              <Link to="/login">Login</Link>
            </span>
            <span>
              <Link to="/register">Register</Link>
            </span>
          </>
        )}
      </div>
    </nav>
  );
};
const mapStateToProps = (state) => ({ user: state.credentials.user });
export default connect(mapStateToProps)(Header);
