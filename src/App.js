import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import EventList from './components/EventList';
import EventDetails from './components/EventsDetails';
import FavoriteEvents from './components/FavoriteEvents';
import NavbarComponent from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [favoriteEvents, setFavoriteEvents] = useState([]);

  const addToFavorites = (event) => {
    setFavoriteEvents([...favoriteEvents, event]);
  };

  const removeFromFavorites = (eventId) => {
    setFavoriteEvents(favoriteEvents.filter(event => event.id !== eventId));
  };

  return (
    <Router>
      <div id="root">
        <NavbarComponent />
        <MainContent
          favoriteEvents={favoriteEvents}
          addToFavorites={addToFavorites}
          removeFromFavorites={removeFromFavorites}
        />
        <Footer />
      </div>
    </Router>
  );
};

const MainContent = ({ favoriteEvents, addToFavorites, removeFromFavorites }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div>
      {isHome && (
        <div className="homepage">
          <h1>Welcome to Patras Events</h1>
        </div>
      )}
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<EventList addToFavorites={addToFavorites} />} />
          <Route path="/event/:id" element={<EventDetails addToFavorites={addToFavorites} />} />
          <Route path="/favorites" element={<FavoriteEvents favoriteEvents={favoriteEvents} removeFromFavorites={removeFromFavorites} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
