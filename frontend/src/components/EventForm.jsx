// src/components/EventForm.jsx


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function EventForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        location: ''
    });
    const [submitting, setSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            const response = await fetch('http://localhost:3000/events', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setFormData({ name: '', date: '', location: '' });
                navigate('/');
            } else {
                console.log('Failed to register event');
            }
        } catch (error) {
            console.log('Error submitting form:', error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="event-form-container">
            <h2>Register New Event</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Event Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="date">Event Date</label>
                    <input
                        type="datetime-local"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                    />
                </div>
                
                <button type="submit" disabled={submitting}>
                    {submitting ? 'Registering...' : 'Register Event'}
                </button>
            </form>
        </div>
    );
}

export default EventForm;