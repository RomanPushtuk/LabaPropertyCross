import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './InputCityPure.css';

function InputCityPure({
    onStartLoading,
    fetchCityApartments,
    onChangeComponent,
    onShowError,
    fetchGeolocationApartmets,
}) {
    const [city, setCity] = useState('');
    const history = useHistory();

    const handleChange = ({ target: { value } }) => {
        setCity(value.toLowerCase().trim());
    };

    const handleGoButtonClick = useCallback(
        (event) => {
            event.preventDefault();

            onStartLoading()
                .then(() => fetchCityApartments(city))
                .then(() => {
                    onChangeComponent('recentSearches');
                    history.push('/listing');
                })
                .catch((error) => onShowError(error.message));
        },
        [city]
    );
    const handleLocationButtonClick = useCallback((event) => {
        event.preventDefault();

        onStartLoading()
            .then(fetchGeolocationApartmets)
            .then(() => {
                onChangeComponent('geolocations');
                history.push('/listing');
            })
            .catch((error) => onShowError(error.message));
    }, []);

    return (
        <form className={style.form}>
            <input className={style.input} onChange={handleChange} type="text" />
            <div>
                <button className={style.button} onClick={handleGoButtonClick} type="submit">
                    Go
                </button>
                <button className={style.button} onClick={handleLocationButtonClick} type="submit">
                    My location
                </button>
            </div>
        </form>
    );
}

InputCityPure.propTypes = {
    onChangeComponent: PropTypes.func,
    onStartLoading: PropTypes.func,
    fetchGeolocationApartmets: PropTypes.func,
    fetchCityApartments: PropTypes.func,
    onShowError: PropTypes.func,
};

export default InputCityPure;
