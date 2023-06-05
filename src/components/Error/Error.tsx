import './error.scss';
import {useNavigate} from "react-router-dom";
const Error = () => {
    const navigate = useNavigate();
    return (
        <main className="error">
            <h1>Error 404</h1>
            <p>Page not found !</p>
            <button className="error-btn" onClick={() => navigate("/")}>Retourner à l'acceuil</button>
        </main>
    );
};

export default Error;
