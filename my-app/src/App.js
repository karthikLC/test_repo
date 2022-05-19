import './App.css';
import {
  Routes,
  HashRouter,
  Route
} from 'react-router-dom';
import Login from './components/Login/Login';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <img src='/logo512.png' alt="Logo" width="150"/>

      <div className="App">
        <HashRouter >
          <Routes>

            <Route exact path="/" element={<Login />} />
          </Routes>
        </HashRouter >
      </div>
    </React.Fragment>
  );
}

export default App;
