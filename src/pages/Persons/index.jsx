import { useState } from "react";
import "./_persons.scss";
import SectionAboutCard from "@/components/Sections/AboutCard";
import Card from "@/components/Card";
import dataPersons from "@/data/persons";

export default function Persons() {
    // состояние раскрытия карточки AboutCard
    let [modal, setModal] = useState(false);
    if (modal) {
        document.body.classList.add("scrollBarHide");
    } else {
        document.body.classList.remove("scrollBarHide");
    }
    return (
        <section className="section persons-section">
            <div className="container">
                <div className="persons-section__card-grid">
                    {dataPersons.map((el) => {
                        return (
                            <Card
                                person={el}
                                key={el.id}
                                transferData={setModal}
                            />
                        );
                    })}
                </div>
                {modal && (
                    <SectionAboutCard modal={setModal} person={modal} />
                )}
            </div>
        </section>
    );
}
