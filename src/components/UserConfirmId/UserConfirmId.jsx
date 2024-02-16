import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Spinner from "../Spinner/Spinner";
import NavBar from "../NavBar/NavBar";
import "./UserConfirmId.css";

const UserConfirmId = ({ confirmId }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div>
            <NavBar />
            {loading ? (
                <Spinner />
            ) : (
                <div className="confirmdId_container">
                    <h1 className="confirmId_title">Felicitaciones</h1>
                    <h3>Has completado tu compra con éxito</h3>
                    <h2 className="confirmId_sub_title">
                        Número de comprobante de compra:
                    </h2>
                    <h2 className="confirmId_title_id">{confirmId}</h2>
                    <h2 className="confirmId_title">¡Gracias!</h2>
                    <Link to={"/"}>
                        <button type="button" className="card_button">
                            Volver
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default UserConfirmId;
