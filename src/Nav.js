import './Nav.css'; // nav styles

// contains the information for the links
const items = [
    {
        label: "Home",
        link: "/"
    },
    {
        label: "Google",
        link: "https://www.google.com"
    }
]

export default function Nav() {
    return <nav id="main-nav">
        <ul>
            {
                // generate the links
                items.map(item => {
                    return <li><a href={item.link}>{item.label}</a></li>
                })
            }
        </ul>
    </nav>
}