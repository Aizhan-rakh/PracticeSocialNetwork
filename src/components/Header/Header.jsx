import React from 'react'; //we should import jsx, react is library from node modules
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return (
        <header className={classes.header}>
            <img src="https://pbs.twimg.com/media/FRYYnDrUcAAkNDP?format=jpg&name=small" />
            <div className={classes.loginBlock}>
                {props.isAuth 
                ? <div>{props.login} - <button onclick={props.logout}>Log out</button></div>
                : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;