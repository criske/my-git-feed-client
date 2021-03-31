import { BrowserRouter } from "react-router-dom";
import NavBarController from "./nav/NavBarController";
import NavContent from "./nav/NavContent";
import './main.css'
import FetchController from "./FetchController";
import Fetch from "./Fetch";

export default function Main() {
    return (
        <BrowserRouter>
            <div className="container">
                <NavBarController />
                <div className="nav-content">
                    <NavContent />
                </div>
                <FetchController><Fetch/></FetchController>
            </div>
        </BrowserRouter>
    )
}