import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { projects } from './project-data.js';
import { useState, useEffect } from "react";
import Nav from './components/Nav'; // import the nav component
import rocks from "./images/rocks.png";
import CardGroup from './components/CardGroup';
import FilterProjects from './components/FilterProjects';

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
const tags = ["All", "Misc", "AI", "iOS", "Self Driving", "Computer Vision"];

function App() {
  const [cards, setCards] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setCards(projects);
  }, [])

  const filterProjects = (i, filterTag) => {
    setActiveIndex(i);
    if (filterTag == 'All') {
      setCards(projects)
      return;
    }
    const filteredProjects = projects.filter((project) => project.tags.includes(filterTag));
    setCards(filteredProjects)
  };

  return (
    // shorthand for the React.Fragment
    <>
      <Nav />
      <h1>COMP2022</h1>
      <div className='headerTag'>
        { tags.map((tag, index) => 
            <FilterProjects 
              tag={ tag } 
              key={ index }
              active={ activeIndex === index }
              onClickChild= { (filterTag) => filterProjects(index, filterTag) }
            />
            ) 
        }
      </div>
      <div id="container">
        {cards && <CardGroup cards={cards} />}
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
