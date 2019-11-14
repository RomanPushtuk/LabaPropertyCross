import React from 'react';
import { connect } from 'react-redux';
import InputCityPure from './InputCityPure';
import fetchCityApartments from './actions/fetchCityApartments';
import fetchGeolocationApartmets from './actions/fetchGeolocationApartmets';

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCityApartments: (city) => dispatch(fetchCityApartments(city)),
        fetchGeolocationApartmets: () => dispatch(fetchGeolocationApartmets()),
    };
};

export default connect(
    undefined,
    mapDispatchToProps
)(InputCityPure);
