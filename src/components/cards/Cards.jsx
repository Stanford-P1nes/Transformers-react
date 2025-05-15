import React from "react";
import Card from "@/components/card/Card.jsx";
import "./cards.scss";

export default function Cards(props) {
    return (
        <section className="cards">
            {props.data.map((el) => (
                <Card
                    key={el.id}
                    data={el}
                    onCardClick={props.onCardClick}
                />
            ))}
        </section>
    );
}