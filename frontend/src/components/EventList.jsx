// src/components/EventList.jsx


import React, { useState, useEffect } from 'react';
import EventItem from './EventItem';

function EventList() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchEvents = async () => {
            try {
                const response = await fetch('http://localhost:3000/events');
                const data = await response.json();
                setEvents(data);
                setLoading(false);
            } catch (error) {
                console.log('Error fetching events:', error);
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    return (
        <div className="event-list-container">
            <h2>Upcoming Events</h2>
            {loading ? (
                <p>Loading events...</p>
            ) : events.length === 0 ? (
                <p>No events found. Be the first to register one!</p>
            ) : (
                <div className="event-list">
                    {events.map((event) => (
                        <EventItem key={event._id} event={event} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default EventList;