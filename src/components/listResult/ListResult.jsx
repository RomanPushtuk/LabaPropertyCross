import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './ListResult.css';

export default function ListSearch({ list }) {
    if (!list.length) {
        return <p className={style.info}>No results</p>;
    }
    return (
        <>
            <p className={style.info}>Recent searches</p>
            <div className={style.search}>
                {list.map((apartment, index) => {
                    const url = `/listing/:${apartment.city}`;

                    return (
                        <p key={index}>
                            <Link to={url} className={style.resultSearch}>
                                Search #{index + 1}
                                <span className={style.status}>({apartment.totalPages || 'not found'})</span>
                            </Link>
                        </p>
                    );
                })}
            </div>
        </>
    );
}

ListSearch.propTypes = {
    list: PropTypes.array,
};
