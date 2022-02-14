export default function FilterProjects(props) {
    return (
        <span 
          className={ props.active ? "active" : "" }
          onClick={ () => props.onClickChild(props.tag) }
        >
            {props.tag} 
        </span>
    )
}