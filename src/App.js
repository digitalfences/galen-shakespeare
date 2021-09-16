import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Review from './components/Review';
import shakespeare_photo from './assets/bard.jpg';
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
      <div className="banner">
        <div className="banner__text">
          <h1>Ye Olde Culture-al Review Board</h1>
          <h2>"All newes of the barde that be fit to print!"</h2>
        </div>
        <img className="banner__photo" alt="a picture of a marble bust of shakespeare" src={shakespeare_photo}></img>
      </div>
      <div className="reviews">
        {reviews ? 
        reviews.map((review) => {
          return <Review review={review}></Review>
        })
        : <h2>Loading...</h2>}
      </div>
    </div>
  );
}

export default App;
