import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const stars = <FontAwesomeIcon icon={faStar}/>

export default class Stars extends Component {
    render() {
        return (
            <div>
                {stars}{stars}{stars}
            </div>
        );
    }
}



//Was playing around with this rating component.

// import Rating from "react-rating";

// export default class Stars extends Component {
//     render() {

// function App() {
//     const [rating, setRating] = useState(0);

//     return (
//         <div className="App">
//             <h3>Rating Component - <a href="https://cluemediator.com/" target="_blank" rel="noopener norefferer">Clue Mediator</a></h3>
//             <strong>Rating</strong>
//             <Rating
//             fractions={2}
//             stop={5}
//             initialRating={rating}
//             onClick={rate => setRating(rate)}
//             />
//             <p>Rating: {rating}</p>
//         </div>
//     );
// }