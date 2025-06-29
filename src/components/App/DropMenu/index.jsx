import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { RiArrowUpDoubleFill } from "react-icons/ri";
import './_dropMenu.scss';

export default function AppDropMenu() {
    let [stateDropMenu, setStateDropMenu] = useState(false);
    let visibility = null;
    function handleClick() {
        setStateDropMenu(!stateDropMenu);
    }
    stateDropMenu ? (visibility = "show") : (visibility = null);
    
    return (
        <menu className={`drop_menu ${visibility}`}>
            <Link className="menu_item menu_item__drop_menu manu_active" to="/">
                Главная
            </Link>
            <Link
                className="menu_item menu_item__drop_menu manu_active"
                to="/persons"
            >
                Персонажи
            </Link>
            <Link
                className="menu_item menu_item__drop_menu manu_active"
                to="/about"
            >
                О нас
            </Link>
            <button
                className="button_drop_menu button_drop_menu__drop_menu"
                onClick={handleClick}
            >
                {stateDropMenu ? <RiArrowUpDoubleFill /> : <MdOutlineKeyboardDoubleArrowDown />}
            </button>
        </menu>
    );
}
