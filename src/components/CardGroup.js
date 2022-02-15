import Card from "./Card";
import styles from "./CardGroup.module.scss";
import FilterProjects from "./FilterProjects";
import { useState } from "react";
import { projects } from '../project-data.js';

/**
 * Displays a group of cards.
 * 
 * @prop cards - A list of cards to display in the group.
 */


export default function CardGroup({ cards, tags }) {
    const [filterCards, setFilterCards] = useState(cards);

    const [activeIndex, setActiveIndex] = useState(0);

    const filterProjects = (i, filterTag) => {
        setActiveIndex(i);
        if (filterTag == 'All') {
          setFilterCards(projects)
          return;
        }
        const filteredProjects = projects.filter((project) => project.tags.includes(filterTag));
        setFilterCards(filteredProjects)
    };

    return (
        <>
        {/* <div className="headerTag"> */}
        <div className={styles.headerTag}>
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
        <div className={styles.card_group}>
            {filterCards.map(card => (
                // https://stackoverflow.com/questions/49081549/passing-object-as-props-to-jsx
                // using the spread operator
                <Card {...card} />
            ))}    
        </div>
        </>
    )
}