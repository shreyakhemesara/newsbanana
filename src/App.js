import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

const App = () => {
  const apikey = process.env.REACT_APP_API_KEY || "02ff76819175478bb254b4806e014427";
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <News key="business" pageSize={5} country="us" apikey={apikey} category="business" />
          }
        />
        <Route
          exact
          path="/entertainment"
          element={
            <News key="entertainment" pageSize={5} country="us" apikey={apikey} category="entertainment" />
          }
        />
        <Route
          exact
          path="/general"
          element={
            <News key="general" pageSize={10} country="us" apikey={apikey} category="general" />
          }
        />
        <Route
          exact
          path="/health"
          element={
            <News key="health" pageSize={5} country="us" apikey={apikey} category="health" />
          }
        />
        <Route
          exact
          path="/science"
          element={
            <News key="science" pageSize={5} country="us" apikey={apikey} category="science" />
          }
        />
        <Route
          exact
          path="/sports"
          element={
            <News key="sports" pageSize={5} country="us" apikey={apikey} category="sports" />
          }
        />
        <Route
          exact
          path="/technology"
          element={
            <News key="technology" pageSize={5} country="us" apikey={apikey} category="technology" />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
