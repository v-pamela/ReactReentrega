import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import "./CartTotal.css";

const CartTotal = () => {
    const { cart } = useContext(ProductsContext);

    const itemsQuanty = cart.reduce((acc, el) => acc + el.quantity, 0);
    return (
        <div>
            <span className="cart_item_total">{itemsQuanty}</span>
        </div>
    );
};

export default CartTotal;
