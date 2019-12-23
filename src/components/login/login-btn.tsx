
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { loginRequested, logout } from '../../state/actions/login';

const BtnStyle = {
    margin: '1vw',
    padding: '1vw',
    'borderRadius': '5px',
    'backgroundColor': 'white',
    'color': 'rebeccapurple',
    "outline": "0",
    cursor: "pointer"
};

const LoginBtnStyle = {
    margin: '1vw',
    padding: '1vw',
    'borderRadius': '5px',
    'backgroundColor': 'white',
    'color': 'rebeccapurple',
    "outline": "0",
    cursor: "pointer"
};

const LogoutBtnStyle = {
    margin: '1vw',
    padding: '1vw',
    'borderRadius': '5px',
    'backgroundColor': 'grey',
    'color': 'rebeccapurple',
    "outline": "0",
    cursor: "pointer"
};



const LoginBtn = ({ currentlyLoggedIn }) => {

    const dispatch = useDispatch();

    const loginClicked = async () => {
        dispatch(loginRequested());
    };

    const logoutClicked = () => {
        dispatch(logout());
    };

    return (
        <button style={{
            ...BtnStyle,
            ...(currentlyLoggedIn ? LogoutBtnStyle : LoginBtnStyle)
        }}>
            {currentlyLoggedIn ? "Logout" : "Login"}
        </button>
    );
};

export default LoginBtn;
