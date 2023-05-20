import "./header.scss";
import {NavLink} from "react-router-dom";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {userSignOut} from "../../../actions/user.action.ts";

const Header: React.FC = () => {
    const user = useSelector(state => state.userReducer.user)
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(userSignOut())
    }
    return (
        <header className="header">
            <nav className="navbar">
                <NavLink to="/" className="navbar-link">
                    <img src="./img/argentBankLogo.png" alt="ArgentBankLogo"/>
                </NavLink>
                {user && user.id ? (
                        <NavLink to="/profile" className="navbar-link">
                            <i className="fa fa-user-circle"></i>
                            <span>{user.firstName}</span>
                            <i className="fa fa-sign-out" onClick={handleLogout}></i>
                        </NavLink>)
                    :
                    (<NavLink to="/signin" className="navbar-link">
                        <i className="fa fa-user-circle"></i>
                        <span>Sign In</span>
                    </NavLink>)
                }

            </nav>
        </header>
    );
};


export default Header;