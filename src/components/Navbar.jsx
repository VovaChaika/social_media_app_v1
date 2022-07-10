import React from 'react';
import {NavLink} from "react-router-dom";
import s from './common-grid.module.css'

const Navbar = () => {
    return (
        <div className={s.navbar}>
            <div>
                <NavLink to={'/profile'}>Profile</NavLink>
            </div>
            <div>
                <NavLink to={'/dialogs'}>Dialogs</NavLink>
            </div>
            <div>
                <NavLink to={'/users'}>Users</NavLink>
            </div>
            <div>
                <NavLink to={'/games'}>Games</NavLink>
            </div>
            <div>
                <NavLink to={'/about'}>About</NavLink>
            </div>
        </div>
    );
};

export default Navbar;