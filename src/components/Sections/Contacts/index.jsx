import React from "react";
import "./_contacts.scss";

export default function SectionContacts() {
    return (
        <article className="contacts">
            <em className="contacts_item">
                Email:
                <a href="mailto:pines10110@gmail.com" target="_blank">
                    pines10110@gmail.com
                </a>
            </em>
            <em className="contacts_item">
                Telegram:
                <a href="https://t.me/Shasty" target="_blank">
                    @ShastunOvsky
                </a>
            </em>
            <em className="contacts_item">
                Instagram:
                <a
                    href="https://www.instagram.com/a.r.a.f.d?igsh=MTBkZGJ3YnU1MG1qdg=="
                    target="_blank"
                >
                    a.r.a.f.d
                </a>
            </em>
            <em className="contacts_item">
                VK:
                <a href="https://vk.com/Gladiator2006" target="_blank">
                    Agaev Ramazan
                </a>
            </em>
        </article>
    );
}
