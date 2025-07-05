import { Link } from "react-router-dom";
import "./_home.scss";

export default function Home() {
    return (
        <section className="section home-section">
            <div className="container">
                <div className="home-section__inner">
                    <section className="home-section__content">
                        <div className="home-section__text-block">
                            <p>
                                Все персонажей из мультфильма Transformers Prime
                                <br /> ты можешь посмотреть и изучить нажав на
                                <Link to={"/persons"}> Персонажи</Link>
                            </p>
                        </div>
                        <div className="home-section__text-block">
                            <p>
                                Если же вам интересно узнать немного про автора
                                проекта TFPrime, <br /> Вам нужно нажать на
                                <Link to={"/about"}> О нас</Link>
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
}
