import React from 'react';
import { NavLink } from 'react-router-dom';
import { path } from 'ramda';

import style from './HeaderComponent.css';

export default function HeaderComponent() {
    const checkCorrectLink = (match, location) => {
        const url = path(['url'], match);
        const pathname = path(['pathname'], location);

        return url === pathname;
    };

    return (
        <nav>
            <NavLink to="/" activeClassName={style.selected} isActive={checkCorrectLink}>
                Page1
            </NavLink>
            <NavLink to="/page2" activeClassName={style.selected} isActive={checkCorrectLink}>
                Page2
            </NavLink>
            <NavLink to="/page3" activeClassName={style.selected} isActive={checkCorrectLink}>
                Page3
            </NavLink>
            <NavLink to="/page3/44" activeClassName={style.selected} isActive={checkCorrectLink}>
                TestParams
            </NavLink>
        </nav>
    );
}
