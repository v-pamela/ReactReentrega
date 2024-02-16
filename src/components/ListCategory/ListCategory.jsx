import { useState, useEffect } from "react";
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
import Card from "../Card/Card";

const ListCategory = () => {
    const [productCategory, setProductCategory] = useState([]);
    const { category } = useParams();

    useEffect(() => {
        const getProductCategory = async () => {
            const q = query(
                collection(db, "products"),
                where("category", "==", category)
            );
            const docs = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setProductCategory(docs);
        };
        getProductCategory();
    }, [category]);

    return (
        <div className="list_product_container">
            {productCategory.map((product) => {
                return <Card product={product} key={product.id} />;
            })}
        </div>
    );
};

export default ListCategory;
