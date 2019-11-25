import React from 'react';
import PropTypes from 'prop-types';
import style from './Match.css';

export default function Match({ match }) {
    const { currentPage, totalPages } = match;

    return (
        <div className={style.card}>
            <p>
                {currentPage} of {totalPages} matches
            </p>
        </div>
    );
}

Match.propTypes = {
    match: PropTypes.object,
};
