import React, { PureComponent } from 'react';
import InputCity from '../../components/input/InputCity';
import AppDescription from '../../components/description/AppDescription';
import RecentSearch from '../../components/recentSearch/RecentSearch';
import Locations from '../../components/locations/Locations';
import Loader from '../../components/loader/Loader';
import Error from '../../components/error/Error';

export default class Search extends PureComponent {
    state = {
        loading: false,
        errorMessage: '',
        activeBlock: 'recentSearches',
    };

    handleLoadingStart = (data) => {
        this.setState({ loading: true });
        return Promise.resolve();
    };

    handleShowBlock = (activeBlock) => {
        this.setState({ activeBlock, loading: false });
    };

    handleShowError = (errorMessage) => {
        this.setState({ activeBlock: 'error', errorMessage, loading: false });
    };

    render() {
        const { loading, activeBlock, errorMessage } = this.state;

        return (
            <>
                <AppDescription />
                <InputCity
                    onStartLoading={this.handleLoadingStart}
                    onChangeComponent={this.handleShowBlock}
                    onShowError={this.handleShowError}
                />
                {loading ? (
                    <Loader />
                ) : (
                    <>
                        {activeBlock === 'recentSearches' && <RecentSearch />}
                        {activeBlock === 'geolocations' && <Locations />}
                        {activeBlock === 'error' && <Error errorMessage={errorMessage} />}
                    </>
                )}
            </>
        );
    }
}
