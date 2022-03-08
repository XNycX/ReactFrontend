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
      <span className="logo">
        <img src="https://www.pngkit.com/png/full/764-7648696_clapperboard-movie-icon-png-hd-clapperboard-movie-icon.png" alt="" />
        <span>FILMS 2022 </span>
       </span>
      <div>
        <span>
          <Link to="/">Home</Link>
        </span>
        <span>
              <Link to="/movies">Movies</Link>
            </span>
        {props.user ? (
          <>
            <span>
              <Link to="/profile">{props.user.user.name}</Link>
            </span>
            <span onClick={()=>logOut()}>Logout</span>
              <span>
              <Link to="/orders">Orders</Link>
            </span>
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
