import React from 'react'
import { Link } from 'react-router-dom';
import './menu.scss'

export default function Menu() {
    return (
        <nav className="menu">
            <Link className="menu_item menu_item__menu manu_active" to="/">
                Главная
            </Link>
            <Link className="menu_item menu_item__menu manu_active" to="/persons">
                Персонажи
            </Link>
            <Link className="menu_item menu_item__menu manu_active" to="/about">
                О нас
            </Link>
        </nav>
    );
}
