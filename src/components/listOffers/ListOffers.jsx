import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Offer from '../offer/Offer';
import style from './ListOffers.css';

export default function ListOffersPure({ listings }) {
    return !listings.length ? (
        <p className={style.info}>No results</p>
    ) : (
        <>
            {listings.map((offer, index) => {
                return (
                    <Link to="/overview" key={index}>
                        <Offer offer={offer} />
                    </Link>
                );
            })}
        </>
    );
}

ListOffersPure.propTypes = {
    listings: PropTypes.array,
};
