import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ListingPure from './ListingPure';
import fetchApartments from './actions/fetchApartments';
import getApartments from './actions/getApartments';
import getTotalPages from '../../redux/selectors/getTotalPages';
import getListings from '../../redux/selectors/getListings';

export default function Listing(props) {
    const { city } = props.match.params;

    const mapDispatchToProps = (dispatch) => {
        return {
            fetchApartments: (page) => dispatch(fetchApartments({ page, city })),
            getApartments: () => dispatch(getApartments()),
        };
    };

    const mapStateToProps = (state) => {
        return {
            totalPages: getTotalPages(state, city),
            listings: getListings(state, city),
            city,
        };
    };

    const ConnectComponent = connect(
        mapStateToProps,
        mapDispatchToProps
    )(ListingPure);

    return <ConnectComponent />;
}

Listing.propTypes = {
    match: PropTypes.object,
};
