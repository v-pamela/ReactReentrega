import NavBar from "../../components/NavBar/NavBar";
import ListProducts from "../../components/ListProducts/ListProduct";
import Banner from "../../components/Banner/Banner";

const Home = () => {
    return (
        <div>
            <NavBar />
            <Banner />
            <ListProducts />
        </div>
    );
};

export default Home;
