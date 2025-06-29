import UiQuickStart from "@/components/Ui/QuickStart";
import "./_home.scss";

export default function Home() {
    return (
        <section className="section section_home">
            <div className="container">
                <div className="home_inner">
                    <UiQuickStart />
                </div>
            </div>
        </section>
    );
}
