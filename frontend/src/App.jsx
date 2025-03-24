
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import EventForm from './components/EventForm';
import EventList from './components/EventList';

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<EventList />} />
        <Route path="/register" element={<EventForm />} />
      </Routes>
    </Router>
  );
};

export default App;