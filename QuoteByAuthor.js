import React from 'react';
import { Link } from 'react-router-dom';

export default function QuoteByAuthor(props) {
    return (
        <div>
            <h1>OHAYO!{props.randomQuote._id}</h1>
            <Link >
                <p>Back</p>
            </Link>
        </div>
    )
}