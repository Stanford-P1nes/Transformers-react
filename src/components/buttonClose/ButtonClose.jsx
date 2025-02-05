import React from "react";
import { IoIosClose } from "react-icons/io";
import "./buttonClose.scss";

export default function ButtonClose(props) {
    return (
        <button
            className="button_close about_card__button_close"
            onClick={() => props.setSelectedCard(null)}
        >
            <IoIosClose />
        </button>
    );
}
