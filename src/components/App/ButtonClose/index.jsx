import React from "react";
import "./_buttonClose.scss";

export default function AppButtonClose(props) {
    return (
        <button
            className="button_close about_card__button_close"
            onClick={() => props.setSelectedCard(null)}
        >
            Закрыть
        </button>
    );
}
