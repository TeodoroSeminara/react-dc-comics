import MySocial from "./MySocial"



const MyFooter = () => {
    const dcComicsLinks = [
        { id: 1, url: "#", name: "Characters", class: false },
        { id: 2, url: "#", name: "Comics", class: false },
        { id: 3, url: "#", name: "Movies", class: false },
        { id: 4, url: "#", name: "TV", class: false },
        { id: 5, url: "#", name: "Games", class: false },
        { id: 6, url: "#", name: "Videos", class: false },
        { id: 7, url: "#", name: "News", class: false }
    ];

    const shopLink = [
        { id: 1, url: "#", name: "Shop DC", class: false },
        { id: 2, url: "#", name: "Shop DC Collectibles", class: false },
    ];

    const dcLinks = [
        { id: 1, url: "#", name: "Terms Of Use", class: false },
        { id: 2, url: "#", name: "Privacy policy(New)", class: false },
        { id: 3, url: "#", name: "Ad Choices", class: false },
        { id: 4, url: "#", name: "Advertising", class: false },
        { id: 5, url: "#", name: "Jobs", class: false },
        { id: 6, url: "#", name: "Subscriptions", class: false },
        { id: 7, url: "#", name: "Talent Workshops", class: false },
        { id: 8, url: "#", name: "CPSC Certificates", class: false },
        { id: 9, url: "#", name: "Ratings", class: false },
        { id: 10, url: "#", name: "Shop Help", class: false },
        { id: 11, url: "#", name: "Contact Us", class: false },
    ];

    const sitesLinks = [
        { id: 1, url: "#", name: "DC", class: false },
        { id: 2, url: "#", name: "MAD Magazine", class: false },
        { id: 3, url: "#", name: "DC Kids", class: false },
        { id: 4, url: "#", name: "DC Universe", class: false },
        { id: 5, url: "#", name: "DC Power Visa", class: false }
    ];

    return (
        <footer className="footer-container">
            <div className="contact-container container">
                <nav>
                    <ul>DC COMICS
                        {dcComicsLinks.map((element) => (
                            <li key={element.id}><a href={element.url}>{element.name}</a></li>))}
                    </ul>
                    <ul>SHOP
                        {shopLink.map((element) => (
                            <li key={element.id}><a href={element.url}>{element.name}</a></li>))}
                    </ul>
                </nav>
                <nav>
                    <ul>DC
                        {dcLinks.map((element) => (
                            <li key={element.id}><a href={element.url}>{element.name}</a></li>))}
                    </ul>
                </nav>
                <nav>
                    <ul>SITES
                        {sitesLinks.map((element) => (
                            <li key={element.id}><a href={element.url}>{element.name}</a></li>))}
                    </ul>
                </nav>

            </div>
            <MySocial />
        </footer >
    )
}

export default MyFooter