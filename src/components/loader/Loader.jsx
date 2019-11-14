import React from 'react';
import style from './Loader.css';

export default function Loader() {
    return (
        <div className={style.containerLoader}>
            <div className={style.circle}>
                <div className={style.holder}>
                    <div className={style.ball} />
                </div>
            </div>
        </div>
    );
}
