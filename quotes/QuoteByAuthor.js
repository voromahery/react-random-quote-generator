import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function QuoteByAuthor(props) {
    const [authorQuote, setAuthorQuote] = useState([]);
    const authorRandom = props.quotesGenRandom.quoteAuthor;
    console.log(authorRandom,"hh");
    const authorName = props.randomQuote.quoteAuthor;
    console.log(authorName,"BY NAME");

    const quoteToFetch = `https://quote-garden.herokuapp.com/api/v2/authors/${authorName}?page=1&limit=3`;

    async function fetchQuote() {
        const response = await fetch(quoteToFetch);
        const data = await response.json();
        setAuthorQuote(data.quotes);
    }

    useEffect(() => {
        fetchQuote(authorQuote);
    }, [])

console.log(authorQuote);

    return (
        <blockquote className="container">
            <h2 className="heading">{authorName}</h2>
            {authorQuote.map((quote) => <p key={quote._id} className="quote">{quote.quoteText}</p>)}
            <Link to="/">
                <p className="page-navigator">Back to homepage</p>
            </Link>
        </blockquote>
    )
}