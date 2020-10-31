import React from 'react';
import { Link } from 'react-router-dom';

export default function Quotes(props) {
    return (
        <div>
            <div className="button-wrapper">
                <button onClick={props.handleClick} className="random-generator-button">random</button>
            </div>
            <blockquote className="container">
                <p className="quote">{props.quotesGenRandom.quoteText}</p>
                <div className="link-wrapper">
                    <Link to="/quotes">
                        <button className="author-button" value={props.quotesGenRandom.quoteAuthor} onClick={props.button}>
                            <h3 className="author-name">{props.quotesGenRandom.quoteAuthor}</h3>
                            <small className="quote-genre">{props.quotesGenRandom.quoteGenre}</small>
                        </button>
                    </Link>
                </div>
            </blockquote>
        </div>
    )
}