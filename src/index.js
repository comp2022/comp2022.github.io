import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './Nav'; // import the nav component

function App() {
  return (
    // shorthand for the React.Fragment
    <>
      <Nav />
    </>
  );
}

// inject into the page
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
