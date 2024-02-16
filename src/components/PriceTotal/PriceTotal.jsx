import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import "./PriceTotal.css";
const PriceTotal = () => {
    const { cart } = useContext(ProductsContext);

    const itemsPrice = cart.reduce(
        (acc, el) => acc + el.quantity * el.price,
        0
    );
    return (
        <div>
            <h3 className="cart_price_total">
                El total de su pedido es: $ {itemsPrice}
            </h3>
        </div>
    );
};

export default PriceTotal;
