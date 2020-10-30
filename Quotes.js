import React from 'react';
import { Link } from 'react-router-dom';
import QuoteByAuthor from './QuoteByAuthor';

export default function Quotes(props) {
    return (
        <div>
            <p>{props.randomQuote.quoteText}</p>
            <Link to={`/QuoteByAuthor/${props.randomQuote._id}`}>
                <button className="author-button" value={props.quoteAuthor}>
                    <h3>{props.randomQuote.quoteAuthor}</h3>
                    <small>{props.randomQuote.quoteGenre}</small>
                </button>
            </Link>
        </div>
    )
}