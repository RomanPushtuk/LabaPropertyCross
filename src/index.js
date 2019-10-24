import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store/configStore';
import { BrowserRouter } from 'react-router-dom';
import MainPage from './pages/main/MainPage';
import 'reset-css';

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <MainPage />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
