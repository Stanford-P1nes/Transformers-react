import { IoPersonSharp } from "react-icons/io5";
import "./_card.scss";

export default function Card(props) {
    function handleClick() {
        props.transferData(props.person);
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                } else {
                    entry.target.classList.remove("show");
                }
            });
        },
        { threshold: 0 },
    );
    setTimeout(() => {
        const cards = document.querySelectorAll(".card");
        cards.forEach((card) => {
            observer.observe(card);
        });
    }, 0);
    return (
        <article className="card" onClick={handleClick}>
            <div className="card__image">
                {props.person.img ? (
                    <img src={props.person.img} alt={props.person.name} />
                ) : (
                    <IoPersonSharp className="card__icon" />
                )}
            </div>
            <h3 className="card__name">
                {props.person.name || "*Неопределено*"}
            </h3>
        </article>
    );
}
