import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import carouselData from './carouselData.json';

function App() {
  console.log(carouselData);
  return <>hi</>
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
