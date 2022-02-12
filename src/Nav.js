import './Nav.css'; // nav styles

// contains the information for the links
const items = [
    {
        label: "Home",
        link: "/"
    }
]

export default function Nav() {
    return <nav id="main-nav">
        <ul>
            {
                // generate the links
                items.map(item => {
                    return <li><a href={process.env.PUBLIC_URL + item.link}>{item.label}</a></li>
                })
            }
        </ul>
    </nav>
}