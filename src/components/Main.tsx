import { BrowserRouter } from "react-router-dom";
import FetchController from "./FetchController";
import NavBarController from "./nav/NavBarController";
import NavContent from "./nav/NavContent";
import './main.css'
import Footer from "./footer";

export default function Main() {
    return (
        <BrowserRouter>
            <header>
                <NavBarController />
            </header>
            <main>
                <section>
                    <NavContent />
                </section>
                <Footer />
            </main>
            <FetchController />
        </BrowserRouter>
    )
}