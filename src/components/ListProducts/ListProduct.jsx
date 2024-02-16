import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import Card from "../Card/Card";
import "./ListProduct.css";
import Spinner from "../Spinner/Spinner";

const ListProducts = () => {
    const { products, isLoading } = useContext(ProductsContext);
    return (
        <div>
            {isLoading ? (
                <Spinner />
            ) : (
                <div className="list_product_container">
                    {products.map((product) => {
                        return <Card product={product} key={product.id} />;
                    })}
                </div>
            )}
        </div>
    );
};
export default ListProducts;
