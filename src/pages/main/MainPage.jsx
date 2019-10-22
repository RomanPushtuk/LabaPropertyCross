import React from 'react';
import { connect } from 'react-redux';
import HeaderComponent from '../../components/header/HeaderComponent';

function MainPage(props) {
    return (
        <HeaderComponent />
    );
}

const mapStateToProps = (state) => ({
    temp: state.template,
});

const mapDispatchToProps = (dispatch) => {
    return {
        increment: (data) => dispatch({ type: 'INCREMENT', prop: data }),
        decrement: () => dispatch({ type: 'DECREMENT' }),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainPage);
