import React from 'react';


export default function Quotes(props) {
    return (
        <div>
            <p>{props.randomQuote.quoteText}</p>
            <h3>{props.randomQuote.quoteAuthor}</h3>
            <small>{props.randomQuote.quoteGenre}</small>
        </div>
    )
}