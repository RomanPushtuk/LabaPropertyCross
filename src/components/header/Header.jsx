import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.css';

export default function Header() {
    return (
        <header className={style.header}>
            <div />
            <NavLink className={style.logo} to="/">
                PropertyCross
            </NavLink>
            <NavLink className={style.faves} to="/faves">
                Faves
            </NavLink>
        </header>
    );
}
