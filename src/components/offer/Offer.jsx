import React from 'react';
import PropTypes from 'prop-types';
import style from './Offer.css';

export default function Offer({ offer }) {
    // console.log(offer);
    const { thumb_url, price_formatted, keywords } = offer;

    return (
        <div className={style.card}>
            <div className={style.thumbnail}>
                <img src={thumb_url} />
            </div>
            <div>
                <p className={style.cost}>{price_formatted}</p>
                <p className={style.keyWords}>{keywords}</p>
            </div>
        </div>
    );
}

Offer.propTypes = {
    offer: PropTypes.object,
};
