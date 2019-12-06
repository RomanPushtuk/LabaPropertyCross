import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Match from '../../components/match/Match';
import InfiniteScroll from '../../components/infiniteScroll/InfiniteScroll';
import ListOffers from '../../components/listOffers/ListOffers';

export default class ListingPure extends PureComponent {
    state = {
        currentPage: 1,
    };

    componentDidMount() {
        this.props.getApartments();
    }

    handleFlippedPage() {
        this.setState({ currentPage: this.state.currentPage + 1 }, this.fetchNextApartments);
    }

    fetchNextApartments() {
        this.props.fetchApartments(this.state.currentPage);
    }

    render() {
        const { listings, totalPages } = this.props;

        return (
            <>
                <Match currentPage={this.state.currentPage} totalPages={totalPages} />
                <InfiniteScroll onFlippedPage={this.handleFlippedPage}>
                    <ListOffers listings={listings} />
                </InfiniteScroll>
            </>
        );
    }
}

ListingPure.propTypes = {
    city: PropTypes.string,
    getApartments: PropTypes.func,
    fetchApartments: PropTypes.func,
    totalPages: PropTypes.number,
    listings: PropTypes.array,
};
