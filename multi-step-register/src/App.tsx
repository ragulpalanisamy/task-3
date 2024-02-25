import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Redux_learning from './pages/Redux_learning';
import MultiStep from './pages/Multi-step';

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MultiStep />} />
          <Route path="/redux-learning" element={<Redux_learning />} />
        </Routes>
      </Router>
    </div>
  )
}

