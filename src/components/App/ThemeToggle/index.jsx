import { useState } from "react";
import Autobots from "/icons/Autobots-ico.png";
import Decepticons from "/icons/Decepticons-ico.png";
import "./_themeToggle.scss";

export default function AppThemeToggle() {
    let [theme, setTheme] = useState(false);
    if (theme) {
        document.body.classList.add("dark-theme");
    } else {
        document.body.classList.remove("dark-theme");
    }

    return (
        <button
            onClick={() => setTheme(!theme)}
            type="button"
            className={`theme-toggle ${theme && "active"}`}
        >
            <div className="theme-toggle__icon theme-toggle__icon_light">
                <img
                    src={Autobots}
                    alt="Иконка фракции автоботов"
                    className={`${theme && "active"}`}
                />
            </div>
            <div className="theme-toggle__icon theme-toggle__icon_dark">
                <img
                    src={Decepticons}
                    alt="Иконка фракции десептиконов"
                    className={`${theme && "active"}`}
                />
            </div>
        </button>
    );
}
