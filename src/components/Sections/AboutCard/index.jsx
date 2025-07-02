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
        props.modal(false);
    }
    return (
        <article className="about-card">
            <div
                className="about-card__wrapper-info"
                onTouchStart={touchStart}
                onTouchMove={touchMove}
                onTransitionEnd={transitionEnd}
            >
                <article className="about-card__header">
                    <img
                        src={props.person.img || "*Неопределено*"}
                        alt={props.person.name || "*Неопределено*"}
                    />
                </article>

                <div className="about-card__content">
                    <h3 className="about-card__name">
                        {props.person.name || "*Неопределено*"}
                    </h3>
                    <div className="about-card__content-grid">
                        <div className="about-card__grid-item">
                            <p className="about-card__title">Фракция: </p>
                            <p>{props.person.fraction || "Одиночка"}</p>
                        </div>
                        <div className="about-card__grid-item">
                            <p className="about-card__title">Звание: </p>
                            {Array.isArray(props.person.ranks) &&
                            props.person.ranks.length > 0 ? (
                                props.person.ranks.map((rank, idx) => (
                                    <p key={idx}>{rank}</p>
                                ))
                            ) : (
                                <p>Без ранга</p>
                            )}
                        </div>
                        <div className="about-card__grid-item">
                            <p className="about-card__title">Альт-форма: </p>
                            {Array.isArray(props.person.altForms) &&
                            props.person.altForms.length > 0 ? (
                                props.person.altForms.map((altForm, idx) => (
                                    <p key={idx}>{altForm}</p>
                                ))
                            ) : (
                                <p>Не трансформируется</p>
                            )}
                        </div>
                        <div className="about-card__grid-item">
                            <p className="about-card__title">Оружие: </p>
                            {Array.isArray(props.person.weapons) &&
                            props.person.weapons.length > 0 ? (
                                props.person.weapons.map((weapon, idx) => (
                                    <p key={idx}>{weapon}</p>
                                ))
                            ) : (
                                <p>Безоружен</p>
                            )}
                        </div>
                        <div className="about-card__grid-item">
                            <p className="about-card__title">Происхождение: </p>
                            <p>{props.person.origin || "Неизвестно"}</p>
                        </div>
                        <div className="about-card__grid-item">
                            <p className="about-card__title">Враг: </p>
                            {Array.isArray(props.person.enemys) &&
                            props.person.enemys.length > 0 ? (
                                props.person.enemys.map((enemy, idx) => (
                                    <p key={idx}>{enemy}</p>
                                ))
                            ) : (
                                <p>Врагов нет</p>
                            )}
                        </div>
                    </div>
                    <p className="about-card__description">
                        {props.person.personality || "Личность не известна"}
                    </p>
                    {/* <q className="about-card__interestingFacts">
                        {props.person.interestingFacts || "*Неопределено*"}
                    </q> */}
                </div>
                <button
                    className="about-card__button"
                    onClick={() => props.modal(false)}
                >
                    X
                </button>
            </div>
        </article>
    );
}
