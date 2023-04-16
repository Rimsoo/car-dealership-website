import React from 'react';
import { Link } from 'react-router-dom';    
import Car from '../components/Car';

export default function Offer() {

    return (
        <div style={{width: 1200, margin: '0 auto' }}>
            <h1>see our offer</h1>
            <Car />
            <Car />
            <Car />
            <Car />
            <Car />
        </div>
    )
}