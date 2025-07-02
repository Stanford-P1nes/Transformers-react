import { Link } from "react-router-dom";
import './_quickStart.scss';

export default function UiQuickStart() {
    return (
        <section className="hero">
            <div className="hero__text-block">
                <b>
                    Все персонажей из мультфильма Transformers Prime <br /> ты
                    можешь посмотреть и изучить нажав на<Link to={'/persons'}> "Персонажи"</Link>
                </b>
            </div>
            <div className="hero__text-block">
                <b>
                    Если же вам интересно узнать немного про автора проекта
                    TFPrime, <br /> Вам нужно нажать на
                    <Link to={'/about'}> "О нас"</Link>
                </b>
            </div>
        </section>
    );
}
