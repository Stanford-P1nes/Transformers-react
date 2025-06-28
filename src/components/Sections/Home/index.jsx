import React from "react";
import QuickStart from "@/components/quickStart/QuickStart.jsx";
import "./home.scss";

export default function Home() {
    return (
        <section className="section section_home">
            <div className="container">
                <div className="home_inner">
                    <QuickStart />
                </div>
            </div>
        </section>
    );
}
