import { createContext, useEffect, useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";

export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
    /* Agregando el cart*/

    const [cart, setCart] = useState([]);

    console.log(cart);

    const addProduct = (product, cant) => {
        if (!isInCart(product.id)) {
            setCart((prev) => [...prev, { ...product, cant }]);
        } else {
            console.log("El producto ya existe");
        }
    };

    const removeProduct = (productId) => {
        const newCart = cart.filter((product) => product.id !== productId);
        setCart(newCart);
    };

    const clearCart = () => {
        setCart([]);
    };

    const isInCart = (productId) => {
        return cart.some((product) => product.id === productId);
    };

    /*Hasta acá lo que agregué al carrito*/

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getProducts = async () => {
            const q = query(collection(db, "products"));
            const docs = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setProducts(docs);
        };
        getProducts();
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <ProductsContext.Provider
            value={{
                products,
                cart,
                setCart,
                addProduct,
                removeProduct,
                clearCart,
                isLoading,
                setIsLoading,
            }}
        >
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductsProvider;
