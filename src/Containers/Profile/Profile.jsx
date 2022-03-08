import React from 'react';
import './Profile.css';
import { connect } from "react-redux";
import { useNavigate } from 'react-router-dom';

const Profile = (props) => {

let navigate = useNavigate();



    return(
        <div className='designProfile'>
            soy Profile
        </div>
    )
};
const mapStateToProps = (state) => ({ user: state.credentials.user });
export default connect(mapStateToProps)(Profile);