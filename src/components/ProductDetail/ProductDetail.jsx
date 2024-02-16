import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebaseConfig";
import {
    collection,
    query,
    getDocs,
    where,
    documentId,
} from "firebase/firestore";
import CardDetail from "../CardDetail/CardDetail";

const ProductDetail = () => {
    const [productDetail, setProductDetail] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const getProduct = async () => {
            const q = query(
                collection(db, "products"),
                where(documentId(), "==", id)
            );
            const docs = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setProductDetail(docs);
        };
        getProduct();
    }, [id]);

    return (
        <div className="list_product_detail_container">
            {productDetail.map((product) => {
                return (
                    <div className="product_detail_container" key={product.id}>
                        <CardDetail product={product} key={product.id} />
                    </div>
                );
            })}
        </div>
    );
};

export default ProductDetail;
