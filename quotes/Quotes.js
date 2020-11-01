import React from 'react';
import { Link } from 'react-router-dom';

export default function Quotes(props) {
    return (
        <div>
            <div className="button-wrapper">
                <button onClick={props.handleClick} className="random-generator-button">random</button>
            </div>
            <blockquote className="container">
                <p className="quote"><q>{props.allQuotes.quoteText || props.quotesGenRandom.quoteText}</q></p>
                <div className="link-wrapper">
                    <Link to="/quotes">
                        <button className="author-button" value={props.allQuotes.quoteAuthor || props.quotesGenRandom.quoteAuthor} onClick={props.button}>
                            <h3 className="author-name">{props.allQuotes.quoteAuthor || props.quotesGenRandom.quoteAuthor}</h3>
                            <small className="quote-genre">{props.allQuotes.quoteGenre || props.quotesGenRandom.quoteGenre}</small>
                        </button>
                    </Link>
                </div>
            </blockquote>
        </div>
    )
}
