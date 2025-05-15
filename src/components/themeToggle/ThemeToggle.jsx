import { useState } from "react";
import Autobots from "@/assets/ico/Autobots-ico.png";
import Decepticons from "@/assets/ico/Decepticons-ico.png";
import "./themeToggle.scss";

export default function ThemeToggle() {
    let [theme, setTheme] = useState(false);
    if (theme) {
        document.body.classList.add("dark_theme");
    } else {
        document.body.classList.remove("dark_theme");
    }

    return (
        <button
            onClick={() => setTheme(!theme)}
            type="button"
            className={`theme_toggle header_inner__theme_toggle ${
                theme && "active"
            }`}
        >
            <div className="themeIconBlock">
                <img
                    src={Autobots}
                    alt="Иконка фракции автоботов"
                    className={`icon_theme icon_light ${theme && "active"}`}
                />
            </div>
            <div className="themeIconBlock">
                <img
                    src={Decepticons}
                    alt="Иконка фракции десептиконов"
                    className={`icon_theme icon_dark ${theme && "active"}`}
                />
            </div>
        </button>
    );
}
