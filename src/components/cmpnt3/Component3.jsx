import React from 'react';
import { useParams } from 'react-router-dom';

export default function Component3() {
    const { data } = useParams();

    return <h2>Компонент3 {data}</h2>;
}
