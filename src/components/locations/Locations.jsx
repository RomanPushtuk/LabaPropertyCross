import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ListResult from '../listResult/ListResult';
import getGeolocationSearches from './actions/getGeolocationSearches';

class Locations extends PureComponent {
    componentDidMount() {
        this.props.getGeolocationSearches();
    }

    render() {
        return <ListResult list={this.props.geolocationSearchedAppartments} />;
    }
}

Locations.propTypes = {
    geolocationSearchedAppartments: PropTypes.array,
    getGeolocationSearches: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
    getGeolocationSearches: () => dispatch(getGeolocationSearches()),
});

const mapStateToProps = (state) => ({
    geolocationSearchedAppartments: state.geolocationSearchedAppartments,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Locations);
