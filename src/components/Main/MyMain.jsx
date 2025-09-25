import MyShop from "./MyShop"
import Comics from "./Comics"

const MyMain = () => {
    return (
        <main>
            <section>
                <div className="jumbotron"></div>
                <div className="main-container container">
                    <div className="bg-blue label-series">CURRENT SERIES</div>
                    <Comics />
                    <button className="btn bg-blue more-comics">LOAD MORE</button>
                </div>
            </section>
            <MyShop />
        </main >
    )
}

export default MyMain