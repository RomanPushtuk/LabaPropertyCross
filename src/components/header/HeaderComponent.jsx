import React from 'react';
import { Link } from 'react-router-dom';

export default function HeaderComponent() {
    return (
        <nav>
            <Link to="/">Page1</Link>
            <Link to="/page2">Page2</Link>
            <Link to="/page3">Page3</Link>
            <Link to="/page3/44">TestParams</Link>
        </nav>
    );
}
