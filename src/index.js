import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { projects } from './project-data.js';
import Nav from './components/Nav'; // import the nav component
import CardGroup from './components/CardGroup';

// const cardss = Array.from({ length: 11 }).map(a => 
//   ({
//     title: "Rocks",
//     subtitle: "Tic-Tac-Toe with a twist",
//     items: [
//       "iPhone / iPad / mac",
//       "Swift",
//       "alpha-beta Minimax AI"
//     ],
//     link: "https://apps.apple.com/us/app/rocks-strategy-game/id1573105489",
//     tags: [ "AI", "iOS" ],
//     image: rocks
//   })
// )


function App() {

  return (
    // shorthand for the React.Fragment
    <>
      <Nav />
      <h1>COMP2022</h1>
      <div id="container">
        <CardGroup cards={projects} />
      </div>
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
