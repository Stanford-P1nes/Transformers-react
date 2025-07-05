import AppLogo from "../Logo";
import UiMenu from "@/components/Ui/Menu";
import AppThemeToggle from "../ThemeToggle";
import AppDropMenu from "../DropMenu";
import "./_header.scss";

export default function AppHeader() {
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <AppLogo />
                    <UiMenu />
                    <AppThemeToggle />
                    <AppDropMenu />
                </div>
            </div>
        </header>
    );
}
