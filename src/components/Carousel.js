import { useEffect, useState } from "react";
import styles from "./Carousel.module.css";
import * as classNames from 'classnames';

export default function Carousel({ data }) {
    const [activeSlide, setActiveSlide] = useState(0);

    return <div className={styles.carousel}>
        <ul>
            { data.map((slide, slideIndex) => {
                const classes = classNames(styles.slide, {[styles.active]: activeSlide === slideIndex})
                return <li className={classes} key={slideIndex}>
                    <img src={slide.media} alt={slide.title} />
                    <h1>{slide.title}</h1>
                    <h3>{slide.subtitle}</h3>
                </li>
            })}
        </ul>
        <button className={styles.left_button} onClick={() => setActiveSlide((activeSlide+data.length-1) % data.length)}>&#8656;</button>
        <button className={styles.right_button} onClick={() => setActiveSlide((activeSlide+1) % data.length)}>&#8658;</button>
    </div>
}