import React from 'react'
import Logo from "/src/components/logo/Logo.jsx";
import Search from "/src/components/search/Search.jsx";
import Menu from "/src/components/menu/Menu.jsx";
import ThemeToggle from "/src/components/themeToggle/ThemeToggle.jsx";
import DropMenu from "/src/components/dropMenu/DropMenu.jsx";
import './header.scss'

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header_inner">
                    <Logo />
                    {/* <Search /> */}
                    <Menu />
                    <ThemeToggle />
                    <DropMenu />
                </div>
            </div>
        </header>
    );
}