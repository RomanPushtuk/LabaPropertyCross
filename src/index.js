import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store/configStore';
import { BrowserRouter as Router } from 'react-router-dom';
import MainLayout from './layouts/main/MainLayout';
import 'reset-css';

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <MainLayout />
        </Provider>
    </Router>,
    document.getElementById('root')
);
