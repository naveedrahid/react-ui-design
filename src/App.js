import React from 'react';
import './App.css';
import AuthenticatedRoute from './components/routes/AuthenticatedRoute';

function App() {
  return (
    <div className="mainApp">
        <AuthenticatedRoute />
    </div>
  );
}

export default App;
