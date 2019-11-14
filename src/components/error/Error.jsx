import React from 'react';
import PropTypes from 'prop-types';
import style from './Error.css';

export default function Error({ errorMessage }) {
    return <p className={style.error}>{errorMessage}</p>;
}

Error.propTypes = {
    errorMessage: PropTypes.string,
};
