import './Review.css'

const Review = ({review}) => {
    return (
        <div className="review">
            <div className="review__content">
                <div className="review__rating">
                    {review.rating}    
                </div> 
                <div className="review__body">
                    {review.body}
                </div>
                <div className="review__author">
                    -{review.author}
                </div>
                <div className="review__time">
                    Penned upon {review.publish_date}
                </div>
            </div>   
        </div>
    )
}

export default Review;