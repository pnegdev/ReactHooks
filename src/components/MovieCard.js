import React from 'react';
import Card from 'react-bootstrap/Card';
import Rating from 'react-rating-stars-component';

//Carte des films
function MovieCard({ movie }) {
    return (
    <Card style={{ width: '14rem', marginTop: 30}}>
        <Card.Img variant="top" src={movie.posterURL} alt={movie.title} />
        <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text style={{ height:'8rem' }}>
            {movie.description.length > 100
            ? `${movie.description.slice(0, 100)}...`
            : movie.description}
        </Card.Text>
        <Rating
            count={5}
            value={movie.rate}
            size={20}
            edit={false}
        />
        </Card.Body>
    </Card>
    );
}

export default MovieCard;
