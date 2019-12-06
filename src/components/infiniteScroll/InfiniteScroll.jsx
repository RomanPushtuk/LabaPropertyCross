import React, { PureComponent } from 'react';
import debounce from 'debounce';
import PropTypes from 'prop-types';

export default class ListOffersPure extends PureComponent {
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = debounce(() => {
        const heightBrowserWindow = window.innerHeight;
        const heightDocument = document.body.scrollHeight;
        const scrollTop = window.pageYOffset;

        if (heightBrowserWindow + scrollTop >= heightDocument) {
            this.props.onFlippedPage();
        }
    }, 200);

    render() {
        return <>{this.props.children}</>;
    }
}

ListOffersPure.propTypes = {
    children: PropTypes.node,
    onFlippedPage: PropTypes.func,
};
