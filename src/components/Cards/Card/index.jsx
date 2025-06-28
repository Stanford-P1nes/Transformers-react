import React from 'react'
import { IoPersonSharp } from "react-icons/io5";
import './card.scss'

export default function Card(props) {
    function handleClick() {
        props.onCardClick(props.data);
    }
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show')
            } else {
                entry.target.classList.remove('show')
            }
        })
    }, {threshold: 0})
    setTimeout(() => {
        const cards = document.querySelectorAll(".card");
        cards.forEach(card => {
            observer.observe(card)
        })
    }, 0)
    return (
        <article
            className="card card_section_persons card_effects"
            onClick={handleClick}
        >
            <div className="wrapper_card_img">
                {props.data.img !== "" ? (
                    <img
                        src={`./src/assets/image/${props.data.img}`}
                        alt={props.data.name}
                    />
                ) : (
                    <IoPersonSharp className='card_ico'/>
                )}
            </div>
            <strong className="card_name">{props.data.name}</strong>
        </article>
    );
}