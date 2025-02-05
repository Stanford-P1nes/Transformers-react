import React, { useState } from "react";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
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
            className={`theme_toggle ${theme && "active"}`}
        >
            <CiLight
                className={
                    theme
                        ? "icon_theme icon_light active"
                        : "icon_theme icon_light"
                }
            />
            <CiDark
                className={
                    theme
                        ? "icon_theme icon_dark active"
                        : "icon_theme icon_dark"
                }
            />
        </button>
    );
}
