import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
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

  let tags = new Set();
  projects.forEach(project => project.tags.forEach(tag => tags.add(tag))); // set allows for only unique elements
  tags = ["All", ...tags]; // convert to array + add the All option

  return (
    // shorthand for the React.Fragment
    <>
      <Nav />
      <h1>COMP2022</h1>
      <div id="container">
        <CardGroup cards={projects} tags={tags} />
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
