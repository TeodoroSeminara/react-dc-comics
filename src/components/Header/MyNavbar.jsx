

const MyNavbar = () => {

    const navbarLinks = ["CHARACTERS", "COMICS", "MOVIES", "TV", "GAMES", "COLLECTIBLES", "VIDEOS", "FANS", "NEWS", "SHOP"];

    const linkNav = navbarLinks.map(navbarLink => (
        <li>
            <a href="#">{navbarLink}</a>
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