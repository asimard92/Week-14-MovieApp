import React from 'react';
import ReviewForm from "./ReviewForm"; 

export default class Movie extends React.Component {
    render() {
        return (
          <div className="container-fluid m-2">
            <div className="card mb-4 bg-info p-2 text-dark bg-opacity-50 ">
              <div className="card-body">
                <div className="row">
                  <div className="col-6">
                    <img
                      src={this.props.image}
                      alt="Poster For The Movie Being Rated."
                      className="mb-5 img-thumbnail"
                    />
                  </div>
                  <div className="col-6">
                    <h2 className="mb-5 fw-bold">{this.props.name}</h2>
                    <p className="mb-4 fw-bold"> Movie Description: {this.props.description}</p>
                    <p className="mb-4 border-bottom border-dark fw-bold">
                      Release Date: {this.props.dateReleased}
                    </p>
                    <p className="mb-4 border-bottom border-dark fw-bold">
                      Length: {this.props.movieLength}
                    </p>
                    <p className="mb-4 border-bottom border-dark fw-bold">
                      Genre(s): {this.props.genre}
                    </p>
                    <p className="mb-4 border-bottom border-dark fw-bold">
                      Rating: {this.props.ageRating}
                    </p>
                    <br />
                    <ReviewForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
    }