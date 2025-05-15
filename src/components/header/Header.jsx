import React from 'react'
import Logo from "@/components/logo/Logo.jsx";
import Search from "@/components/search/Search.jsx";
import Menu from "@/components/menu/Menu.jsx";
import ThemeToggle from "@/components/themeToggle/ThemeToggle.jsx";
import DropMenu from "@/components/dropMenu/DropMenu.jsx";
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