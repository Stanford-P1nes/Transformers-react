import AppHeader from "@/components/App/Header";
import AppFooter from "@/components/App/Footer";
import React from "react";

export default function DefaultLayout({ children }) {
    return (
        <>
            <AppHeader />
            <main>{ children }</main>
            <AppFooter />
        </>
    );
}