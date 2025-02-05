import React from "react";
import Card from "../card/Card";
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