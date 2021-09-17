import './Review.css'

const Review = ({review}) => {
    let date = new Date(review.publish_date);
    date = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()

    let rating = Math.round(review.rating)
    let stars = [0,0,0,0,0]
    for (let i = 0; i < 5; i++) {
        if (rating >= i) {
            stars[i] = 1
        }
    }
    return (
        <div className="review">
            <div className="review__content">
                <div className="review__rating">
                    {stars.map((num) => {
                        if(num == 0) {return <>&#9734;</> }
                        else { return (<>&#9733;</>)};
                    })}
                    {review.rating}    
                </div> 
                <div className="review__body">
                    {review.body}
                </div>
                <div className="review__author">
                    -{review.author}
                </div>
                <div className="review__time">
                    Penned upon {date}
                </div>
            </div>   
        </div>
    )
}

export default Review;