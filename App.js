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

    useEffect(() => {
        fetchRandomQuote(quotesGenRandom);
    }, [])

    async function handleClick() {
        const response4 = await fetch("https://quote-garden.herokuapp.com/api/v2/quotes/random");
        const data4 = await response4.json();
        console.log(data4);
        setAllQuotes(data4.quote)
    }

    function button(e) {
        const buttons = e.target.value;
        const findByAuthor = randomQuote.filter((quote) => quote.quoteAuthor === buttons);
        setRandomQuote(findByAuthor);
        console.log(findByAuthor,"YESS");
    }

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
