import React, { useState, useEffect } from 'react';
import { Card, Button, Row, Col, Form, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import eventsData from '../data/eventsData';
import '../App.css';

const EventList = ({ addToFavorites }) => {
  const [events, setEvents] = useState(eventsData);
  const [filter, setFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  useEffect(() => {
    const filteredEvents = eventsData.filter(event => {
      const titleMatches = event.title.toLowerCase().includes(filter.toLowerCase());
      if (statusFilter === 'all') {
        return titleMatches;
      }
      const today = new Date();
      const eventEndDate = new Date(event.endDate);
      const eventStartDate = new Date(event.startDate);
      if (statusFilter === 'past') {
        return titleMatches && eventEndDate < today;
      }
      if (statusFilter === 'future') {
        return titleMatches && eventStartDate > today;
      }
      if (statusFilter === 'current') {
        return titleMatches && eventStartDate <= today && eventEndDate >= today;
      }
      return titleMatches;
    });
    setEvents(filteredEvents);
  }, [filter, statusFilter]);

  const isPastEvent = (endDate) => {
    const today = new Date();
    const eventEndDate = new Date(endDate);
    return eventEndDate < today;
  };

  return (
    <div className="event-section">
      <Form.Control
        type="text"
        placeholder="Search Events"
        onChange={e => setFilter(e.target.value)}
        className="mb-4"
      />
      <Form.Group controlId="statusFilter" className="mb-4">
        <Form.Label>Φίλτρο Κατάστασης Εκδηλώσεων</Form.Label>
        <Form.Control
          as="select"
          value={statusFilter}
          onChange={e => setStatusFilter(e.target.value)}
        >
          <option value="all">Όλες</option>
          <option value="current">Τρέχουσες</option>
          <option value="future">Μελλοντικές</option>
          <option value="past">Παρελθούσες</option>
        </Form.Control>
      </Form.Group>
      <Row>
        {events.map(event => (
          <Col xs={12} sm={6} md={4} key={event.id} className="mb-4">
            <Card className={isPastEvent(event.endDate) ? 'past-event' : 'active-event'}>
              <div className="card-favorite">
                <Button onClick={() => addToFavorites(event)} variant="warning">
                  Προσθήκη στις Αγαπημένες
                </Button>
              </div>
              <Card.Img variant="top" src={event.image} />
              <Card.Body>
                <Card.Title>{event.title}</Card.Title>
                <Card.Text>
                  {event.startDate} - {event.endDate}
                </Card.Text>
                <Card.Text>
                  {event.shortDescription}
                </Card.Text>
                <Card.Text>
                  <FaStar color="gold" /> {event.rating}
                </Card.Text>
                {isPastEvent(event.endDate) && (
                  <Badge bg="secondary" className="mb-2">Completed</Badge>
                )}
                <Button 
                  as={Link} 
                  to={isPastEvent(event.endDate) ? "#" : `/event/${event.id}`} 
                  variant="primary" 
                  disabled={isPastEvent(event.endDate)}>
                  Learn More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default EventList;
