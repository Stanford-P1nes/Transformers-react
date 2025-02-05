import React from "react";
import QuickStart from "../quickStart/QuickStart";
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
