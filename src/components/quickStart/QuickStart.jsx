import React from "react";
import { Link } from "react-router-dom";
import './quickStart.scss';
import '../../sass/base/wrapper_text.scss';

export default function QuickStart() {
    return (
        <section className="quick_start">
            <div className="wrapper_text wrapper_text__quick_start">
                <b>
                    Все персонажей из мультфильма Transformers Prime <br /> ты
                    можешь посмотреть и изучить нажав на кнопку снизу <br />
                    "Персонажи"
                </b>
                <Link
                    className="button_primary button_primary_home button_effects"
                    to="/persons"
                >
                    Персонажи
                </Link>
            </div>
            <div className="wrapper_text wrapper_text__quick_start">
                <b>
                    Если же вам интересно узнать немного про автора проекта
                    TFPrime, <br /> Вам нужно нажать на кнопку снизу "О нас"
                </b>
                <Link
                    className="button_primary button_primary_home button_effects"
                    to="/about"
                >
                    О нас
                </Link>
            </div>
        </section>
    );
}
