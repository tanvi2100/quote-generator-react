import React, {useState, useEffect} from 'react';
import "./App.css";

const App = () => {

    const [quote, setQuote] = useState('');

    const getQuotes = () => {
        fetch("http://api.quotable.io/random")
            .then((res) => res.json())
            .then(quote => {
                setQuote(quote.content);
            })
    }

    useEffect( () => {
        getQuotes();
    }, []);

    return (
        <div className="app">
          <div className="card">
              <h1 className="heading">
                {quote}
              </h1>
              <button className="button" onClick={getQuotes}>
                <span>GENERATE ANOTHER QUOTE!</span>
              </button>
          </div>
        </div>
    )
}

export default App
