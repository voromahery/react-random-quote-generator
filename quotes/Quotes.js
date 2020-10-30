import React from 'react';
import { Link } from 'react-router-dom';
import QuoteByAuthor from './QuoteByAuthor';

export default function Quotes(props) {
    return (
        <div>
            <p>{props.randomQuote.quoteText}</p>
            <Link to="/quotes">
                <button className="author-button" value={props.randomQuote.quoteAuthor} onClick={props.button}>
                    <h3>{props.randomQuote.quoteAuthor}</h3>
                    <small>{props.randomQuote.quoteGenre}</small>
                </button>
            </Link>
        </div>
    )
}