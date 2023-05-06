import React from "react";
import ReviewList from "./ReviewList";
import StarsRating from "./StarsRating";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

export default class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            review: "", //user adds their review 
            reviews: [],
            stars: 0, //user puts their star rating
        };
    }


handleChange = (e) => {
    this.setState({review: e.target.value});
};

handleStarsChange = (newRating) => {
    this.setState({stars: newRating});
};

handleSubmit = (e) => {
    e.preventDefault();
    const newReview ={
        review: this.state.review, 
        stars: this.state.stars,
    };
    //adds new review
    this.setState({
        reviews: [...this.state.reviews, newReview],
        review: "",
        stars: 0,
    });
};

render() {
    return (
      <div>
        {this.state.reviews.length === 0 ? (
          <div>
            <h2 className="mb-5 fst-italic">There are no reviews yet.</h2>
          </div>
        ) : (
          // review list component
          <div>
            <h2>Reviews:</h2>
            {/* mapping reviews state to ReviewList Component */}
            {this.state.reviews.map((review, index) => (
              <ReviewList
                review={review.review}
                stars={review.stars}
                index={index}
              />
            ))}
          </div>
        )}
        
        <div className="card mb-4">
          <div className="card-body bg-danger p-4 text-dark bg-opacity-50">
            <h2>Review This Movie:</h2>
            <br />
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="review"
                  value={this.state.review}
                  onChange={this.handleChange}
                  placeholder="Type Your Review Here"
                />
              </div>
              <br />
              <div className="form-group d-flex fw-bold justify-content-center">
                <label htmlFor="stars"> Star Rating:</label>
                 <StarsRating
                  stars={this.state.stars}
                  onChange={this.handleStarsChange}
                />
              </div>
              <br />
              <button type="submit" className="btn btn-danger">
                Submit Review
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
