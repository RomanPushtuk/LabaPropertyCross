import React from 'react';
import { connect } from 'react-redux';

import { Switch, Route } from 'react-router-dom';

import HeaderComponent from '../../components/header/HeaderComponent';
import Component1 from '../../components/cmpnt1/Component1';
import Component2 from '../../components/cmpnt2/Component2';
import Component3 from '../../components/cmpnt3/Component3';
import Error from '../../components/error/ErrorComponent';

function MainPage(props) {
    return (
        <>
            <HeaderComponent />
            <Switch>
                <Route exact path="/" component={Component1} />
                <Route path="/page2" component={Component2} />
                <Route exact path="/page3" component={Component3} />
                <Route path="/page3/:data" component={Component3} />
                <Route exact path="*" component={Error} />
            </Switch>
        </>
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
