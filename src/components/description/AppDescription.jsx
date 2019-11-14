import React from 'react';
import style from './AppDescription.css';

export default function AppDescription() {
    return (
        <p className={style.description}>
            Use the form below to search for houses to buy. You can search by place-name, postcode, or click &apos;My
            location&apos;, to search in your current location
        </p>
    );
}
