import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

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

// inject into the page
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
