import { BrowserRouter } from "react-router-dom";
import FetchController from "./FetchController";
import NavBarController from "./nav/NavBarController";
import NavContent from "./nav/NavContent";
import './main.css'

export default function Main() {
    return (
        <BrowserRouter>
            <div className="container">
                <NavBarController />
                <div className="nav-content">
                    <NavContent />
                </div>
                <FetchController/>
            </div>
        </BrowserRouter>
    )
}