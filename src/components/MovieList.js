import React, { Component } from 'react';
import Movie from './Movie';
import Interstellar from '../images/Interstellar.jpg';
import TheDarkKnight from '../images/TheDarkKnight.jpg';
import ShawshankRedemption from '../images/ShawshankRedemption.jpg';

export default class MovieList extends Component {
    render() {
        const movieArray = [

            {
                id: 1,
                title: "Interstellar",
                img: Interstellar,
                description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
                imdbRating: "IMDB Rating - 8.6"
            },

            {
                id: 2,
                title: "The Dark Knight",
                img: TheDarkKnight,
                description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
                imdbRating: "IMDB Rating - 9.0"
            },

            {
                id: 3,
                title: "The Shawshank Redemption",
                img: ShawshankRedemption,
                description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
                imdbRating: "IMDB Rating - 9.3"
            }
        ];

        let movies;
        if (movieArray) {
            movies = movieArray.map((movie, id) => <Movie key={id} {...movie} />);
        }

        return (
            // const or this.state = { [Movies] }
            <div>
                {movies}
            </div>
        )
    }
}
