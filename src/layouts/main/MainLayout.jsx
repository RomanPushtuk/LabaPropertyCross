import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HeaderComponent from '../../components/header/Header';
import Search from '../../pages/search/Search';
import FavoritesAppartments from '../../pages/favorites/FavoritesAppartments';
import Result from '../../pages/result/Result';
import Listing from '../../pages/listing/Listing';
import Error from '../../pages/error/ErrorComponent';
import style from './MainLayout.css';

function MainLayout(props) {
    return (
        <div className={style.main}>
            <HeaderComponent />
            <Switch>
                <Route exact path="/" component={Search} />
                <Route path="/faves" component={FavoritesAppartments} />
                <Route exact path="/result" component={Result} />
                <Route exact path="/listing/:city" component={Listing} />
                <Route path="*" component={Error} />
            </Switch>
        </div>
    );
}

export default MainLayout;
