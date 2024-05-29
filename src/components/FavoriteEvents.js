import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FavoriteEvents = ({ favoriteEvents, removeFromFavorites }) => {

  const isPastEvent = (endDate) => {
    const today = new Date();
    const eventEndDate = new Date(endDate);
    return eventEndDate < today;
  };

  return (
    <div className="container mt-4">
      <h2>Αγαπημένες Εκδηλώσεις</h2>
      <Row>
        {favoriteEvents.length > 0 ? (
          favoriteEvents.map(event => (
            <Col xs={12} sm={6} md={4} key={event.id} className="mb-4">
              <Card className={isPastEvent(event.endDate) ? 'past-event' : 'active-event'}>
                <Card.Img variant="top" src={event.image} />
                <Card.Body>
                  <Card.Title>{event.title}</Card.Title>
                  <Card.Text>
                    {event.startDate} - {event.endDate}
                  </Card.Text>
                  <Card.Text>
                    {event.shortDescription}
                  </Card.Text>
                  <Button 
                    as={Link} 
                    to={isPastEvent(event.endDate) ? "#" : `/event/${event.id}`} 
                    variant="primary" 
                    disabled={isPastEvent(event.endDate)}>
                    Learn More
                  </Button>
                  <Button variant="danger" onClick={() => removeFromFavorites(event.id)} className="mt-2">
                    Remove from Favorites
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p>Δεν έχετε σημειώσει καμία εκδήλωση ως αγαπημένη.</p>
        )}
      </Row>
    </div>
  );
};

export default FavoriteEvents;
