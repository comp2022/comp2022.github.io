import { useEffect, useRef, useState } from "react";
import styles from "./Carousel.module.css";
import * as classNames from 'classnames';

export default function Carousel({ data }) {
    const [activeSlide, setActiveSlide] = useState(0);
    const carouselParent = useRef();

    const changeSlide = (offset) => {
        if(!carouselParent) return;
        
        const slides = carouselParent.current.querySelectorAll(`ul > .${styles.slide}`);
        
        // deal with left/right shenanigans
        const [prevAnim, nextAnim] = offset > 0 ? [styles.activeLeftPrev, styles.activeLeftNext]
                                        : [styles.activeRightPrev, styles.activeRightNext];

        // get the index of the slide we're changing to
        const nextSlide = (activeSlide + data.length + offset) % data.length;
        slides[activeSlide].classList.add(prevAnim);
        slides[nextSlide].classList.add(nextAnim);

        // remove animations after transition is finished
        setTimeout(() => {
            slides[activeSlide].classList.remove(prevAnim);
            slides[nextSlide].classList.remove(nextAnim);

            setActiveSlide(nextSlide);
        }, 1000);
    }

    return <div className={styles.carousel} ref={carouselParent}>
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
        <button className={styles.left_button}  onClick={() => changeSlide(-1)}>&#8656;</button>
        <button className={styles.right_button} onClick={() => changeSlide(+1)}>&#8658;</button>
    </div>
}