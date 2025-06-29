import React from "react";
import AppButtonClose from "@/components/App/ButtonClose";
import "./_aboutCard.scss";

export default function SectionAboutCard(props) {
    let startY = 0; // Начальная координата по Y
    function touchStart(event) {
        startY = event.touches[0].clientY; // Сохраняем начальную точку касания
    }
    function touchMove(event) {
        const currentY = event.touches[0].clientY; // Текущая координата касания
        const delayY = currentY - startY; // Разница между текущей и начальной точками
        // Если разница отрицательная (движение вверх) и достаточно большая
        if (delayY < -100) {
            event.currentTarget.style.transform =
                "translateY(-100px) scale(.8)"; // Сделаем смещение вверх (Анимация)
            event.currentTarget.style.opacity = "0"; // Сделаем её прозрачной (Анимация)
            event.currentTarget.parentElement.style.opacity = "0";
        } else if (delayY > 100) {
            event.currentTarget.style.transform = "translateY(100px) scale(.8)"; // Сделаем смещение вверх (Анимация)
            event.currentTarget.style.opacity = "0"; // Сделаем её прозрачной (Анимация)
            event.currentTarget.parentElement.style.opacity = "0";
        }
    }
    function transitionEnd() {
        //Когда анимация завершена, скрываем карточку также как и при нажатии на крестик
        props.setSelectedCard(null);
    }
    return (
        <aside className="about_card">
            <div
                className="wrapper_info__about_card"
                onTouchStart={touchStart}
                onTouchMove={touchMove}
                onTransitionEnd={transitionEnd}
            >
                <div className="wrapper_info__top_line">
                    <img
                        className="about_card_image"
                        src={`src/assets/image/${props.data.img}`}
                        alt={props.data.name}
                    />
                </div>
                <div className="wrapper_info__bottom_line">
                    <strong className="design_bottom_line person_name">
                        {props.data.name}
                    </strong>
                    <p className="design_bottom_line person_fraction">
                        <em>Фракция: </em>
                        <span>{props.data.fraction}</span>
                    </p>
                    <p className="design_bottom_line person_rank">
                        <em>Звание: </em>
                        <span>{props.data.rank}</span>
                    </p>
                    <p className="design_bottom_line person_altForm">
                        <em>Альт-форма: </em>
                        {props.data.altForm}
                    </p>
                    <p className="design_bottom_line person_weapon">
                        <em>Оружие: </em>
                        <span>{props.data.weapon}</span>
                    </p>
                    <p className="design_bottom_line person_personality">
                        {props.data.personality}
                    </p>
                    <p className="design_bottom_line person_origin">
                        <em>Происхождение: </em>
                        <span>{props.data.origin}</span>
                    </p>
                    <p className="design_bottom_line person_enemy">
                        <em>Враг: </em>
                        <sapn>{props.data.enemy}</sapn>
                    </p>
                    <q className="design_bottom_line person_interestingFacts">
                        {props.data.interestingFacts}
                    </q>
                </div>
                <AppButtonClose setSelectedCard={props.setSelectedCard} />
            </div>
        </aside>
    );
}
