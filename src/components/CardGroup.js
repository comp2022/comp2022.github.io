import Card from "./Card";
import styles from "./CardGroup.module.scss";
import FilterProjects from "./FilterProjects";
import { useEffect, useState } from "react";

/**
 * Displays a group of cards.
 * 
 * @prop cards - A list of cards to display in the group.
 */


export default function CardGroup({ cards }) {
    const [tags, setTags] = useState(null);

    const [filterCards, setFilterCards] = useState(cards);

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        let tags = new Set();
        cards.forEach(cards => cards.tags.forEach(tag => tags.add(tag))); // set allows for only unique elements
        tags = ["All", ...tags]; // convert to array + add the All option
        setTags(tags);
    }, []);  // only use this once

    const filterProjects = (i, filterTag) => {
        setActiveIndex(i);
        if (filterTag == 'All') {
          setFilterCards(cards)
          return;
        }
        const filteredProjects = cards.filter((card) => card.tags.includes(filterTag));
        setFilterCards(filteredProjects)
    };

    return (
        <>
        {/* <div className="headerTag"> */}
        <div className={styles.headerTag}>
            { tags && tags.map((tag, index) => 
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