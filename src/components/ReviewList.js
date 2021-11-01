import React, { Component } from 'react';
import Review from './Review';

export default class ReviewList extends Component {
    render() {
        let reviews;
        if (this.props.review) {
            reviews = this.props.review.map((review) => <Review key={review.id} reviewContent={review.reviewContent} reviewRating={review.reviewRating}/>);
        }
        return (
            <div>
                {reviews}
            </div>
        )
    }
}
