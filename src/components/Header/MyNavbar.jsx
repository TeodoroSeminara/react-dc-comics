const MyNavbar = () => {

    const navbarLinks = [
        { id: 1, url: "#", name: "CHARACTERS", class: false },
        { id: 2, url: "#", name: "COMICS", class: false },
        { id: 3, url: "#", name: "MOVIES", class: false },
        { id: 4, url: "#", name: "TV", class: false },
        { id: 5, url: "#", name: "GAMES", class: false },
        { id: 6, url: "#", name: "COLLECTIBLES", class: false },
        { id: 7, url: "#", name: "VIDEOS", class: false },
        { id: 8, url: "#", name: "FANS", class: false },
        { id: 9, url: "#", name: "NEWS", class: false },
        { id: 10, url: "#", name: "SHOP", class: false }
    ];

    const linkNav = navbarLinks.map(navbarLink => (
        <li>
            <a key={navbarLink.id} href={navbarLink.url}>{navbarLink.name}</a>
        </li>
    ));


    return (
        <nav className="navbar">
            <ul className="navbar-list">
                {linkNav}
            </ul>
        </nav>
    )
}

export default MyNavbar