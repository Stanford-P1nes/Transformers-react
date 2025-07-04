import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import "./_search.scss";

export default function UiSearch() {
    let [placeholder, setPlaceholder] = useState("Название персонажа");
    let [visibileButton, setVisibileButton] = useState(false);

    return (
        <form className="search">
            <input
                type="text"
                placeholder={placeholder}
                onFocus={() => setPlaceholder((placeholder = ""))}
                onBlur={() =>
                    setPlaceholder((placeholder = "Название персонажа"))
                }
                onInput={(event) => {
                    if (event.target.value !== "") {
                        setVisibileButton((visibileButton = true));
                    } else {
                        setVisibileButton((visibileButton = false));
                    }
                }}
            />

            <button className={`search__button ${visibileButton && "active"}`}>
                <CiSearch />
            </button>
        </form>
    );
}
