import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import dataPersons from "@/data/persons";
import DefaultLayout from "@/layouts/DefaultLayout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Persons from "@/pages/Persons";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <DefaultLayout>
                            <Home />
                        </DefaultLayout>
                    }
                />
                <Route
                    path="/persons"
                    element={<Persons data={dataPersons} />}
                />
                <Route
                    path="/about"
                    element={
                        <DefaultLayout>
                            <About />
                        </DefaultLayout>
                    }
                />
            </Routes>
        </Router>
    );
}
