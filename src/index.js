import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store/configStore';
import { BrowserRouter as Router } from 'react-router-dom';
import MainPage from './pages/main/MainPage';
import 'reset-css';

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <MainPage />
        </Provider>
    </Router>,
    document.getElementById('root')
);
