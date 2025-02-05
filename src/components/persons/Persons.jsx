import React, { useState } from 'react'
import Cards from '../cards/Cards'
import AboutCard from '../aboutCard/AboutCard';
import './persons.scss';

export default function persons(props) {
    // состояние раскрытия карточки AboutCard
    let [selectedCard, setSelectedCard] = useState(null)
    if (selectedCard) {
        document.body.classList.add("scrollBarHide");
    } else {
        document.body.classList.remove("scrollBarHide");
    }
    return (
        <section className="section section_persons">
            <div className="container">
                <Cards
                    data={props.data}
                    onCardClick={setSelectedCard}
                />
                {selectedCard && (
                    <AboutCard
                        setSelectedCard={setSelectedCard}
                        data={selectedCard}
                    />
                )}
            </div>
        </section>
    );
}
