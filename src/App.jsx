import ProductsProvider from "./context/ProductsContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./components/Cart/Cart";
import Category from "./pages/Category/Category";
import Detail from "./pages/Detail/Detail";
import User from "./pages/User/User";

const App = () => {
    return (
        <BrowserRouter>
            <ProductsProvider>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/category/:category"
                            element={<Category />}
                        />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/detail/:id" element={<Detail />} />
                        <Route path="/user" element={<User />} />
                    </Routes>
                </div>
            </ProductsProvider>
        </BrowserRouter>
    );
};

export default App;
