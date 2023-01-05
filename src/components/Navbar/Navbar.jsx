import React from 'react'; //we should import jsx, react is library from node modules
import classes from './Navbar.module.css';
import { NavLink } from "react-router-dom";

// let s={
//     'nav': 'Какое-то название, которое можно увидеть в браузере', 
//     'item': 'some name',
//     'active': 'another name'
// }

// let classes1 = 'item';
// let classes 2 = 'active';
// Comment: to get: 'item active'
// let classes = classes1 + " " + classes2;
// let classesNew_ES6 = `${classes.item} ${classes.active}`;

// console.log(classes);


const Navbar = (props) => {
    return (
        <nav className={classes.nav}>
            <div >
                <NavLink to="/profile" className={navData => navData.isActive ? classes.active : classes.item}> Profile </NavLink>
            </div>
            <div>
                <NavLink to="/dialogs" className={navData => navData.isActive ? classes.active : classes.item} > Messages </NavLink>
            </div>
            <div >
                <NavLink to="/news" className={navData => navData.isActive ? classes.active : classes.item} >News</NavLink>
            </div>
            <div >
                <NavLink to="/users" className={navData => navData.isActive ? classes.active : classes.item} >Users</NavLink>
            </div>
            <div>
                <NavLink to="/music" className={navData => navData.isActive ? classes.active : classes.item} >Music</NavLink>
            </div>
            <div>
                <NavLink to="/settings" className={navData => navData.isActive ? classes.active : classes.item} >Settings</NavLink>
            </div>
            {/* That is my attempt <div>
                <span>{props.state.friends} </span>
            </div> */} 
        </nav>
    )
}

export default Navbar