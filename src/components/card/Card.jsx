import React from 'react'
import './card.scss'

export default function Card(props) {
    function handleClick() {
        props.onCardClick(props.data);
    }
    return (
        <article
            className="card card_section_persons card_effects"
            onClick={handleClick}
        >
            <div className="wrapper_card_img">
                <img
                    src={`./src/assets/image/${props.data.img}`}
                    alt={props.data.name}
                />
            </div>
            <strong className="card_name">{props.data.name}</strong>
        </article>
    );
}