import AppHeader from "@/components/App/Header";
import AppFooter from "@/components/App/Footer";

export default function DefaultLayout({ children }) {
    return (
        <>
            <AppHeader />
            <main>{children}</main>
            <AppFooter />
        </>
    );
}
