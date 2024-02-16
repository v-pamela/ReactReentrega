import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Card.css";

const Card = ({ product }) => {
    return (
        <div className={product.stock === 0 ? "card out" : "card"}>
            <Link style={{ color: "black" }} to={`/detail/${product.id}`}>
                <img
                    className="card_img"
                    src={product.img}
                    alt={product.category}
                />
                <h3 className="card_title">{product.name}</h3>
                <h4 className="card_sub_title">$ {product.price}</h4>
                <h5 className="card_stock">Stock: {product.stock}</h5>
                <h6 className="card_quantity">Cantidad: {product.quantity}</h6>
            </Link>
            <Link to={`/detail/${product.id}`} key={product.id}>
                <button type="button" className="card_button">
                    Detalle
                </button>
            </Link>
        </div>
    );
};
export default Card;

Card.propTypes = {
    product: PropTypes.object.isRequired,
};
