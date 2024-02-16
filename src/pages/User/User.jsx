import { Link } from "react-router-dom";
import UserForm from "../../components/UserForm/UserForm";
//import "./User.css";

const User = () => {
    return (
        <div className="user_page">
            <UserForm />
            <Link to={"/"}>Volver</Link>
        </div>
    );
};

export default User;
