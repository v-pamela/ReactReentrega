import PropTypes from "prop-types";
import "./CartDetail.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";

const CartDetail = ({ product }) => {
    const { cart, setCart } = useContext(ProductsContext);
    const [quanty, setQuanty] = useState(product.quantity);

    const refreshQuanty = (id, quanty) => {
        const newCart = cart.map((producto) => {
            if (producto.id === id) {
                return { ...producto, quantity: quanty };
            } else {
                return producto;
            }
        });
        setCart(newCart);
    };

    const newIncrement = () => {
        if (product.quantity < product.stock) {
            setQuanty((product.quantity += 1));
        }
    };

    const newDecrement = () => {
        if (product.quantity > 1) {
            setQuanty((product.quantity -= 1));
        }
    };

    const deleteProduct = () => {
        console.log("borrando");
        const foundItem = cart.find((item) => item.id === product.id);
        const newCart = cart.filter((item) => {
            return item !== foundItem;
        });
        setCart(newCart);
    };

    return (
        <div key={product.id} className="cart_detail">
            <div className="cart_img">
                <img
                    className="card_img"
                    src={product.img}
                    alt={product.category}
                />
            </div>
            <div className="cart_delete">
                <h1 className="card_title">{product.name}</h1>
            </div>
            <div className="cart_delete">
                <h4 className="card_sub_title">
                    Precio unitario: $ {product.price}
                </h4>
                <h3 className="card_sub_title">
                    Sub-total: $ {product.price * product.quantity}
                </h3>
            </div>
            <div className="cart_delete">
                <h3 className="card_stock">Stock: {product.stock}</h3>
                <h3 className="card_quantity">Cantidad: {quanty}</h3>
                <div>
                    <button
                        type="button"
                        className="card_button_cant"
                        // onClick={() => setQuanty((product.quantity -= 1))}
                        onClick={newDecrement}
                    >
                        -
                    </button>
                    <Link to={"/cart"} key={product.id}>
                        <button
                            type="button"
                            className="card_button"
                            onClick={() => refreshQuanty(product.id, quanty)}
                            disabled={!product.stock}
                        >
                            Actualizar
                        </button>
                    </Link>
                    <button
                        type="button"
                        className="card_button_cant"
                        // onClick={() => setQuanty((product.quantity += 1))}
                        onClick={newIncrement}
                    >
                        +
                    </button>
                </div>
            </div>
            <div className="cart_delete">
                <h2 className="cart_delete_product" onClick={deleteProduct}>
                    ❌
                </h2>
            </div>
        </div>
    );
};

export default CartDetail;

CartDetail.propTypes = {
    product: PropTypes.object.isRequired,
};
