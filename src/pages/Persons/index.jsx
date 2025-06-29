import SectionAboutCard from "@/components/Sections/AboutCard";
import Card from "@/components/Card";
import "./_persons.scss";
import { useState } from "react";

export default function Persons(props) {
    // состояние раскрытия карточки AboutCard
    let [selectedCard, setSelectedCard] = useState(null);
    if (selectedCard) {
        document.body.classList.add("scrollBarHide");
    } else {
        document.body.classList.remove("scrollBarHide");
    }
    return (
        <section className="section persons-section">
            <div className="container">
                <div className="persons-section__card-grid">
                    <Card data={props.data} onCardClick={setSelectedCard} />
                </div>
                {selectedCard && (
                    <SectionAboutCard
                        setSelectedCard={setSelectedCard}
                        data={selectedCard}
                    />
                )}
            </div>
        </section>
    );
}
