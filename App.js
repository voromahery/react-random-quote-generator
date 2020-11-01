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
        const response = await fetch("https://quote-garden.herokuapp.com/api/v2/quotes/random");
        const data = await response.json();
        setQuotesGenRandom(data.quote);
        setAllQuotes(data.quote);
    }

    useEffect(() => {
        fetchRandomQuote(quotesGenRandom);
    }, [])

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
                        <Quotes randomQuote={randomQuote} allQuotes={allQuotes} button={button} quotesGenRandom={quotesGenRandom} handleClick={fetchRandomQuote}/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App;
