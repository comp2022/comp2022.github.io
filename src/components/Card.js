import styles from "./Card.module.scss";

/*
    title: string
    subtitle: string
    items: string[]
    link: string
    tags: string[]
    image: img
*/
export default function Card({ title, subtitle, items, link, image }) {
    return <div className={styles.card}>
        <a href="./images/rocks.png">
            <img src={image} alt={title}/>
        </a>
        <h2>{title}</h2>
        <h4>{subtitle}</h4>
        <ul>
            {items.map(item => <li>{item}</li>)}
        </ul>
    </div>
}