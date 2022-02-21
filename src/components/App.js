import React from 'react';
import '../index.scss';
import { projects } from '../project-data';
import Nav from './Nav'; // import the nav component
import CardGroup from './CardGroup';

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

export default App;