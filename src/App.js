import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
const baseURL= "https://shakespeare.podium.com/api/reviews"

const App = () => {
  const [reviews, setReviews] = useState(null);

  useEffect(async () => {
    fetch(
      "https://shakespeare.podium.com/api/reviews",
      {
        headers: { "X-Api-Key": "H3TM28wjL8R4#HTnqk?c" },
      }
    ).then(response => response.json()).then(data =>
      setReviews(data)
    )
  }, [])


  return (
    <div className="App">
      <div className="app_banner">
        <h1>Ye Olde Culture-al Review Board</h1>
        <h2>"All newes of the barde that be fit to print!"</h2>
      </div>
      <div className="reviews">
        {reviews ? reviews[0].rating : <h2>Loading...</h2>}
      </div>
    </div>
  );
}

export default App;
