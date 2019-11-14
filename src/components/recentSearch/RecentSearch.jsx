import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ListResult from '../listResult/ListResult';
import getRecentSearches from './actions/getRecentSearches';

class RecentSearch extends PureComponent {
    componentDidMount() {
        this.props.getRecentSearches();
    }

    render() {
        return <ListResult list={this.props.recentAppartments} />;
    }
}

RecentSearch.propTypes = {
    recentAppartments: PropTypes.array,
    getRecentSearches: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
    getRecentSearches: () => dispatch(getRecentSearches()),
});

const mapStateToProps = (state) => ({
    recentAppartments: state.recentSearchedAppartments,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RecentSearch);
