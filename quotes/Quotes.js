import React from 'react';
import { Link } from 'react-router-dom';

export default function Quotes(props) {
    return (
        <blockquote className="container">
            <p className="quote">{props.randomQuote.quoteText || props.quotesGenRandom.quoteText}</p>
            <div className="link-wrapper">
            <Link to="/quotes">
                <button className="author-button" value={props.randomQuote.quoteAuthor || props.quotesGenRandom.quoteAuthor} onClick={props.button}>
                    <h3 className="author-name">{props.randomQuote.quoteAuthor || props.quotesGenRandom.quoteAuthor}</h3>
                    <small className="quote-genre">{props.randomQuote.quoteGenre || props.quotesGenRandom.quoteGenre}</small>
                </button>
            </Link>
            </div>
        </blockquote>
    )
}