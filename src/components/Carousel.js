import styles from "./Carousel.module.css";

export default function Carousel({ data }) {

    return <div className={styles.carousel}>
        <ul>
            { data.map(slide =>
                <li className={styles.slide}>
                    <img src={slide.media} alt={slide.title} />
                </li>
            )}
        </ul>
        <button className={styles.left_button}>&#8656;</button>
        <button className={styles.right_button}>&#8658;</button>
    </div>
}