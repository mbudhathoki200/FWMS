import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Heading from './Heading';
import Navigation from './Navigation';
import Request from './Request';
import DonorDetails from './DonorDetails';
import AgentDetails from './AgentDetails';
import Donations from './Donations';

function App() {
  return (
    <div className='app-content'>
      <Navigation />
      <div className='right-view'>
        <Heading />
        <div className='body-wrapper'>
          {/* <Request />
          <Request />
          <Request />
          <Request /> */}
          <Router>
          <Routes>
           <Route path="/" element={<DonorDetails />} />
          <Route path="/AgentDetails" element={<AgentDetails />} />
          <Route path="/Request" element={<Request />} />
          <Route path="/Donation" element={<Donations />} />
          </Routes>
          </Router>
        </div>

      </div>
    </div>
  );
}

export default App;
