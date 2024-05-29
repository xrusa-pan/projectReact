import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Container, Badge, Form, Button } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import eventsData from '../data/eventsData';

const EventDetail = ({ addToFavorites }) => {
  const { id } = useParams();
  const event = eventsData.find(event => event.id === parseInt(id));

  const isPastEvent = (endDate) => {
    const today = new Date();
    const eventEndDate = new Date(endDate);
    return eventEndDate < today;
  };

  const [reviews, setReviews] = useState(event.reviews);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleRatingChange = (e) => setRating(e.target.value);
  const handleCommentChange = (e) => setComment(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      user: 'User',
      date: new Date().toISOString().split('T')[0],
      text: comment,
      rating: parseInt(rating),
    };
    const updatedReviews = [...reviews, newReview];
    setReviews(updatedReviews);

    
    const totalRating = updatedReviews.reduce((acc, review) => acc + review.rating, 0);
    const avgRating = (totalRating / updatedReviews.length).toFixed(1);
    event.rating = avgRating;

    setRating(0);
    setComment('');
  };

  return (
    <Container className="mt-4">
      <Card>
        <Card.Img variant="top" src={event.image} />
        <Card.Body>
          <Card.Title>{event.title}</Card.Title>
          <Card.Text>
            <strong>Ημερομηνία:</strong> {event.startDate} - {event.endDate}
          </Card.Text>
          <Card.Text>
            <strong>Τοποθεσία:</strong> {event.location}
          </Card.Text>
          <Card.Text>
            {event.description}
          </Card.Text>
          <Card.Text>
            <FaStar color="gold" /> {event.rating}
          </Card.Text>
          {isPastEvent(event.endDate) && (
            <Badge bg="secondary" className="mb-2">Completed</Badge>
          )}
          <Button onClick={() => addToFavorites(event)} variant="success" className="mt-2">
            Προσθήκη στις Αγαπημένες
          </Button>
        </Card.Body>
      </Card>
      <div className="mt-4">
        <h4>Κριτικές</h4>
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <Card key={index} className="mb-3">
              <Card.Body>
                <Card.Text>
                  <strong>{review.user}</strong> <em>{review.date}</em>
                </Card.Text>
                <Card.Text>{review.text}</Card.Text>
                <Card.Text>
                  <FaStar color="gold" /> {review.rating}/5
                </Card.Text>
              </Card.Body>
            </Card>
          ))
        ) : (
          <p>Δεν υπάρχουν κριτικές για αυτή την εκδήλωση.</p>
        )}
      </div>
      <div className="mt-4">
        <h4>Προσθέστε την αξιολόγησή σας</h4>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="rating">
            <Form.Label>Βαθμολογία</Form.Label>
            <Form.Control as="select" value={rating} onChange={handleRatingChange} required>
              <option value="">Επιλέξτε</option>
              <option value="1">1 - Κακή</option>
              <option value="2">2 - Μέτρια</option>
              <option value="3">3 - Καλή</option>
              <option value="4">4 - Πολύ Καλή</option>
              <option value="5">5 - Εξαιρετική</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="comment">
            <Form.Label>Σχόλιο</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={comment}
              onChange={handleCommentChange}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-2">
            Υποβολή
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default EventDetail;
