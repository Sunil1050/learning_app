import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Step from "./components/Step";

const App = () => {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/course/:id" element={<Step />} />
        </Routes>
      </Router>
  );
};

export default App;
