import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import Home from "./components/home/Home";
import Persons from "./components/persons/Persons";
import About from "./components/about/About";

import dataPersons from "./dataPersons";

export default function App() {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/persons"
                        element={<Persons data={dataPersons} />}
                    />
                    <Route path="/about" element={<About />} />
                </Routes>
                <Footer />
            </Router>
        </>
    );
}
