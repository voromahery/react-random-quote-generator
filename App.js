import React, { useEffect, useState } from 'react';

function App() {
    const [quotesGen, setQuotesGen] = useState([]);
    const [randomQuote, setRandomQuote] = useState([]);

    async function fetchQuote() {
        const response = await fetch("https://quote-garden.herokuapp.com/api/v2/quotes/random");
        const data = await response.json();
        setQuotesGen(data.quote)
        console.log(data.quote);
    }

    useEffect(() => {
        fetchQuote(quotesGen);
    }, [])

    function handleClick() {
        const randomIndex = Math.floor(Math.random() * quotesGen.quoteText.length);
        console.log(randomIndex);
                setRandomQuote(quotesGen[randomIndex]);
                console.log(quotesGen[randomIndex].quoteText);
        }

    return (
        <div>
            <button onClick={handleClick}>Random</button>
            <div>
                <p>{quotesGen.quoteText}</p>
                <h3>{quotesGen.quoteAuthor}</h3>
                <small>{quotesGen.quoteGenre}</small>
            </div>
        </div>
    )
}

export default App;