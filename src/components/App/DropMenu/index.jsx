import { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { RiArrowUpDoubleFill } from "react-icons/ri";
import "./_dropMenu.scss";

export default function AppDropMenu() {
    let [stateDropMenu, setStateDropMenu] = useState(false);
    let visibility = null;
    function handleClick() {
        setStateDropMenu(!stateDropMenu);
    }
    stateDropMenu ? (visibility = "show") : (visibility = null);

    return (
        <menu className={`drop-menu ${visibility}`}>
            <Link className="drop-menu__link" to="/">
                Главная
            </Link>
            <Link className="drop-menu__link" to="/persons">
                Персонажи
            </Link>
            <Link className="drop-menu__link" to="/about">
                О нас
            </Link>
            <button className="drop-menu__button" onClick={handleClick}>
                {stateDropMenu ? (
                    <RiArrowUpDoubleFill />
                ) : (
                    <MdOutlineKeyboardDoubleArrowDown />
                )}
            </button>
        </menu>
    );
}
