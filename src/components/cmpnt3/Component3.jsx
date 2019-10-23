import React from 'react';
import PropTypes from 'prop-types';
import { path } from 'ramda';

export default function Component3(props) {
    const data = path(['match', 'params', 'data'], props);

    return <h2>Компонент3 {data}</h2>;
}

Component3.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            data: PropTypes.string,
        }),
    }),
};
