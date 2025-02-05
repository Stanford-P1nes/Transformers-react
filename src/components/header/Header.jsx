import React from 'react'
import Logo from "../logo/Logo"
import Search from "../search/Search"
import Menu from "../menu/Menu";
import ThemeToggle from "../themeToggle/ThemeToggle";
import DropMenu from "../dropMenu/DropMenu";
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