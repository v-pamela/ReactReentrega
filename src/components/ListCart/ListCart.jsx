import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import CartDetail from "../CartDetail/CartDetail";

const ListCart = () => {
    const { cart } = useContext(ProductsContext);

    return (
        <div className="list_cart_container">
            {cart.map((product) => {
                return <CartDetail product={product} key={product.id} />;
            })}
        </div>
    );
};

export default ListCart;
