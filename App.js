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
        setQuotesGenRandom(data1.quote);
    }

    async function fetchAllQuotes() {
        const response2 = await fetch("https://quote-garden.herokuapp.com/api/v2/quotes?page=1&limit=10");
        const data2 = await response2.json();
        setAllQuotes(data2.quotes);
    }

    useEffect(() => {
        fetchRandomQuote(quotesGenRandom);
        fetchAllQuotes(allQuotes);
    }, [])

    async function handleClick() {
        const response4 = await fetch("https://quote-garden.herokuapp.com/api/v2/quotes/random");
        const data4 = await response4.json();
        console.log(data4);
        setAllQuotes(data4.quote)
        // const randomIndex = Math.floor(Math.random() * allQuotes.length);
        // console.log(randomIndex);
        // setRandomQuote(allQuotes[randomIndex]);
        // console.log(allQuotes[randomIndex]);
    }

    function button(e) {
        const buttons = e.target.value;
        const findByAuthor = quotesGenRandom.filter((quote) => quote.quoteAuthor === buttons);
        setQuotesGenRandom(findByAuthor);
        console.log(findByAuthor,"YESS");
    }

    // console.log(allQuotes);

    return (
        <div className="site-container">
            <Router>
                <Switch>
                    <Route path="/quotes">
                        <QuoteByAuthor allQuotes={allQuotes} randomQuote={randomQuote}  quotesGenRandom={quotesGenRandom} />
                    </Route>
                    <Route path="/">
                        <Quotes randomQuote={randomQuote} allQuotes={allQuotes} button={button} quotesGenRandom={quotesGenRandom} handleClick={handleClick}/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App;
