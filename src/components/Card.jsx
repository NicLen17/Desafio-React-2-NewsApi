function Card(props) {
    return (
        <div className="container py-5">
            <div className="card" style={{ width: "18rem" }}>
                <img
                    src={props.imagen}
                    className="card-img-top"
                    alt="..."
                />
                <div className="card-body bg-danger">
                    <h5 className="card-title">{props.titulo}</h5>
                    <p className="card-text">
                        {props.descripcion}
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Card;
