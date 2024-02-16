import { useState, useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import { db } from "../../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import UserConfirmId from "../UserConfirmId/UserConfirmId";
import "./UserForm.css";
import NavBar from "../NavBar/NavBar";

const initialState = {
    name: "",
    phone: "",
    email: "",
};

const UserForm = () => {
    const [values, setValues] = useState(initialState);
    const [confirmId, setConfirmId] = useState("");
    const { cart, setCart } = useContext(ProductsContext);

    const handleOnChange = (e) => {
        const { value, name } = e.target;
        setValues({ ...values, [name]: value });
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const docRef = await addDoc(collection(db, "user"), {
            values,
        });
        setValues(initialState);
        setConfirmId(docRef.id);
        setCart([]);
    };

    return (
        <>
            <NavBar />

            <div className="form_container">
                {confirmId ? (
                    <UserConfirmId confirmId={confirmId} />
                ) : (
                    <div>
                        <h2 className="form_title">
                            Ingresa tus datos para terminar la compra
                        </h2>
                        <form className="form" onSubmit={handleOnSubmit}>
                            <label htmlFor="name">
                                Nombre. Debe tener al menoos 3 caracteres.
                            </label>
                            <input
                                required
                                id="name"
                                className="form_input"
                                onChange={handleOnChange}
                                value={values.name}
                                type="text"
                                name="name"
                                placeholder="Ingresa un nombre de al menos tres letras"
                                pattern="^.{3,}$"
                            />
                            <label htmlFor="phone">
                                Teléfono. Debe tener diez dígitos
                            </label>
                            <input
                                required
                                id="phone"
                                className="form_input no-spinners"
                                onChange={handleOnChange}
                                value={values.phone}
                                type="number"
                                name="phone"
                                placeholder="Ingresa tu teléfono"
                                pattern="^[0-9]{9}$"
                            />
                            <label htmlFor="email">Email. Formato a@a.a</label>
                            <input
                                required
                                id="email"
                                className="form_input"
                                onChange={handleOnChange}
                                value={values.email}
                                type="email"
                                name="email"
                                placeholder="Ingresa tu email"
                                pattern="^[^@]+@[^@]+\.[^@]+$"
                            />

                            <button className="form_button" type="submit">
                                Enviar
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </>
    );
};

export default UserForm;
