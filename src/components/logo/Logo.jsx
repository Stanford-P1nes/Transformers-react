import { Link } from "react-router-dom";
import "./logo.scss";

export default function Logo() {
    return (
        <Link to="/" className="logo">
            TFPrime
        </Link>
    );
}
