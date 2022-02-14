import styles from "./CardGroup.module.css";
export default function FilterProjects(props) {
    return (
        <span 
          className={ props.active ? styles.active : "" } 
          onClick={ () => props.onClickChild(props.tag) }
        >
            {props.tag} 
        </span>
    )

}