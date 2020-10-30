import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function QuoteByAuthor(props) {
    const [authorQuote, setAuthorQuote] = useState([]);
    // const authorName = props.randomQuote.quoteAuthor;
    // console.log(authorName);

    const quoteToFetch = `https://quote-garden.herokuapp.com/api/v2/authors/:?page=1&limit=10`;

    async function fetchQuote() {
        const response = await fetch();
        const data = await response.json();
        setAuthorQuote(data);
    }
    
    return (
        <div>
            <p>HELLO GUYS</p>
            <Link to="/">
                <p>Back to homepage</p>
            </Link>
        </div>
    )
}