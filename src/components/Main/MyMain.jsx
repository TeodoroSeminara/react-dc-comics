import MyShop from "./MyShop"
import Comics from "./Comics"

const jumbo = "../../src/assets/img/jumbotron.jpg"

const MyMain = () => {
    return (
        <main>
            <div className="jumbotron">
                {/* <img src={jumbo} alt="" /> */}
                <div className="main-container container">
                    <Comics />
                </div>
            </div>
            <MyShop />
        </main >
    )
}

export default MyMain