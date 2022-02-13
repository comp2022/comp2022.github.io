import styles from "./Card.module.css";

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
        <a href={link}>
            <img src={image} alt={title}/>
        </a>
        <h2>{title}</h2>
        <h4>{subtitle}</h4>
        <ul>
            {items.map(item => <li>{item}</li>)}
        </ul>
    </div>
}