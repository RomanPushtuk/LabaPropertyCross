import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store/configStore';
import MainPage from './pages/main/MainPage';

ReactDOM.render(
    <Provider store={store}>
        <MainPage />
    </Provider>,
    document.getElementById('root')
);
