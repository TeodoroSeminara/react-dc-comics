const ComicsCard = (props) => {

    const { thumb, series, title } = props.comicsProps

    return (
        <figure className="comics-container"> <a href="#">
            <img src={thumb} alt={series} />
            <figcaption>{title}</figcaption></a>
        </figure>
    )
}

export default ComicsCard