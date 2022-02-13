import Card from "./Card";
import styles from "./CardGroup.module.css";

/**
 * Displays a group of cards.
 * 
 * @prop cards - A list of cards to display in the group.
 */
export default function CardGroup({ cards }) {

    return <div className={styles.card_group}>
        {cards.map(card => (
            // https://stackoverflow.com/questions/49081549/passing-object-as-props-to-jsx
            // using the spread operator
            <Card {...card} />
        ))}    
    </div>
}