// src/components/EventItem.jsx
import React from 'react';

function EventItem({ event }) {
  // Format the date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="event-item">
      <h3>{event.name}</h3>
      <p><strong>Date:</strong> {formatDate(event.date)}</p>
      <p><strong>Location:</strong> {event.location}</p>
    </div>
  );
}

export default EventItem;