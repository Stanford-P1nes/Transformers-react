import { Link } from "react-router-dom";
import "./_menu.scss";

export default function UiMenu() {
    return (
        <nav className="menu">
            <Link className="menu__link" to="/">
                Главная
            </Link>
            <Link className="menu__link" to="/persons">
                Персонажи
            </Link>
            <Link className="menu__link" to="/about">
                О нас
            </Link>
        </nav>
    );
}
