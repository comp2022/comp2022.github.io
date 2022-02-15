import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { data } from './carouselData';
import Carousel from './components/Carousel';

function App() {
  return <>
    <Carousel data={data} />
  </>;
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
