import { Link } from "react-router-dom";
import "./_logo.scss";

export default function AppLogo() {
    return (
        <Link to="/" className="logo">
            TF
        </Link>
    );
}
