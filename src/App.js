import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Review from "./components/Review";
import shakespeare_photo from "./assets/bard.jpg";
const baseURL = "https://shakespeare.podium.com/api/reviews";

function useReviewAPI() {
  const [reviews, setReviews] = useState(null);
  useEffect(() => {
    let isStopped = false;

    if (!isStopped) {
      const getReviews = async () => {
        try {
          const {data: reviews } = await axios.get(baseURL, {
            headers: { "x-api-key": "H3TM28wjL8R4#HTnqk?c" },
          });
          if (!isStopped && reviews) {
            setReviews(reviews);
            isStopped = true;
          }
        } catch (error) {
          console.error(error);
        }
      };
      getReviews();
    }

  return () => {
      isStopped = true;
    }; 
  }, []);

  return [reviews];
}

const App = () => {
  const [reviews] = useReviewAPI();

  return (
    <div className="App">
      <div className="banner">
        <div className="banner__text">
          <h1>Ye Olde Culture-al Review Board</h1>
          <h2>"All newes of the barde that be fit to print!"</h2>
        </div>
        <img
          className="banner__photo"
          alt="a marble bust of shakespeare"
          src={shakespeare_photo}
        ></img>
      </div>
      <div className="reviews">
        {reviews ? (
          reviews.map((review) => {
            return <Review review={review} key={review.id}></Review>;
          })
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </div>
  );
};

export default App;
