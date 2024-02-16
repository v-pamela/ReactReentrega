import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import PropTypes from "prop-types";
import "./CardDetail.css";

const CardDetail = ({ product }) => {
    const { addProduct } = useContext(ProductsContext);
    const [cant, setCant] = useState(1);

    const increment = () => {
        if (cant < product.stock) {
            setCant(cant + 1);
        }
    };
    const decrement = () => {
        if (cant > 1) {
            setCant(cant - 1);
        }
    };

    const add = ({ product }) => {
        addProduct({ ...product, product, quantity: cant });
    };

    return (
        <div className={product.stock === 0 ? "card out" : "card detail"}>
            <img
                className="card_img"
                src={product.img}
                alt={product.category}
            />
            <h2 className="card_titulo">{product.name}</h2>
            <h3 className="card_sub_titulo">$ {product.price}</h3>
            <h4 className="card_stock">Stock: {product.stock}</h4>
            <h2 className="card_quantity">Cantidad: {cant}</h2>
            <h3 className="card_description">{product.description}</h3>
            <div>
                <button
                    type="button"
                    className="card_button_cant"
                    onClick={decrement}
                >
                    -
                </button>
                <Link to={"/cart"} key={product.id}>
                    <button
                        type="button"
                        className="card_button"
                        onClick={() => add({ product })}
                        disabled={!product.stock}
                    >
                        Comprar
                    </button>
                </Link>
                <button
                    type="button"
                    className="card_button_cant"
                    onClick={increment}
                >
                    +
                </button>
            </div>
        </div>
    );
};
export default CardDetail;

CardDetail.propTypes = {
    product: PropTypes.object.isRequired,
};
