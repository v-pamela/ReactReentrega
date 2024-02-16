import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import ListCart from "../ListCart/ListCart";
import NavBar from "../NavBar/NavBar";
import "./Cart.css";
import PriceTotal from "../PriceTotal/PriceTotal";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, clearCart } = useContext(ProductsContext);
    return (
        <>
            <NavBar />
            {cart.length > 0 ? (
                <div className="cart">
                    {cart.length > 0 ? <PriceTotal /> : null}
                    <button
                        type="button"
                        className="button_cart clear"
                        onClick={clearCart}
                    >
                        Vaciar el carrito
                    </button>
                    <Link to={"/"}>
                        <button type="button" className="button_cart continue">
                            Seguir comprando
                        </button>
                    </Link>
                    <Link to={"/user"}>
                        <button type="button" className="button_cart buy">
                            Terminar la compra
                        </button>
                    </Link>
                    <ListCart />
                </div>
            ) : (
                <div className="cart_empty">
                    <h1 className="cart_title">Aún no has comprado nada</h1>
                    <Link to={"/"}>
                        <button
                            className="button_cart"
                            style={{ backgroundColor: "var(--button-hover)" }}
                        >
                            Ir al menu
                        </button>
                    </Link>
                </div>
            )}
        </>
    );
};

export default Cart;
