import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import { LOGOUT } from "../../redux/types";
import { connect } from "react-redux";
import { Input } from '@mantine/core';
import { useState } from "react";

const Header = (props) => {
  let navigate = useNavigate();
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
    if (e.key === "Enter") {
      navigate('/search/'+ text)
    }
  };

  const logOut = () => {
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
      <Input onKeyUp={handleChange} variant="default" placeholder="Search movie" styles={{ input: { width: '500px' } }}/>
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
              <Link to="/profile">{props.user.name}</Link>
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
