import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import CartTotal from "../CartTotal/CartTotal";
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";

const NavBar = () => {
    const { cart } = useContext(ProductsContext);
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="navbar_container" onClick={() => setIsOpen(!isOpen)}>
            <div className={`navbar_items ${isOpen && "open"}`}>
                <Link to={"/"}>INICIO</Link>
                <Link to={`/category/beer`}>CERVEZAS</Link>
                <Link to={`/category/food`}>PLATOS</Link>
                <Link to={`/category/Special`}>ESPECIALES</Link>
            </div>
            <div
                className={`navbar_toggle ${isOpen && "open"}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className="navbar_title">
                <Link to={"/"}>
                    <h1>Piltriquitron</h1>
                    <h6>Food && Beer</h6>
                </Link>
            </div>

            <div className="navbar_cart">
                <Link to={"/cart"}>
                    🛒 {cart.length > 0 ? <CartTotal /> : null}
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;
