import MyNavbar from "./MyNavbar"

const MyHeader = () => {
    return (
        <header>
            <div className="header-container container">
                <figure className="logo-header">
                    <a href="#"><img src="../../src/assets/img/dc-logo.png" alt="Logo" /></a>
                </figure>
                <MyNavbar />
            </div>
        </header>
    )
}

export default MyHeader