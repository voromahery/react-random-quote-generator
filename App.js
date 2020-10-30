import React, { useEffect, useState } from 'react';
import Quotes from './quotes/Quotes';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import QuoteByAuthor from './quotes/QuoteByAuthor';

function App() {
    const [quotesGenRandom, setQuotesGenRandom] = useState([]);
    const [allQuotes, setAllQuotes] = useState([]);
    const [randomQuote, setRandomQuote] = useState([]);

    async function fetchRandomQuote() {
        const response1 = await fetch("https://quote-garden.herokuapp.com/api/v2/quotes/random");
        const data1 = await response1.json();
        setQuotesGenRandom(data1.quote)
        console.log(data1.quote, "1");
    }

    async function fetchAllQuotes() {
        const response2 = await fetch("https://quote-garden.herokuapp.com/api/v2/quotes?page=1&limit=100");
        const data2 = await response2.json();
        setAllQuotes(data2.quotes)
        console.log(data2.quotes, "2");
    }

    useEffect(() => {
        fetchRandomQuote(quotesGenRandom);
        fetchAllQuotes(allQuotes);
    }, [])

    function handleClick() {
        const randomIndex = Math.floor(Math.random() * allQuotes.length);
        console.log(randomIndex);
        setRandomQuote(allQuotes[randomIndex]);
        console.log(allQuotes[randomIndex]);
    }
    console.log(randomQuote, "RANDOM");

function button(e) {
    const buttons = e.target.value;
    const findByAuthor = allQuotes.filter((quote) => quote.quoteAuthor == buttons);
    console.log(findByAuthor);

    console.log(buttons);
}


    return (
        <div>
            <button onClick={handleClick}>Random</button>
            <Router>
                <Switch>
                    <Route path="/quotes">
                        <QuoteByAuthor />
                    </Route>
                    <Route path="/">
                        <Quotes randomQuote={randomQuote} button={button}/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App;