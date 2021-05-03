import { Fragment, useRef } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Provider } from "../../state/State";
import { Select } from "../misc/select";
import './navBar.css'
import { NavBarProps } from "./NavBarProps";

export default function NavBar({ hasRounter, provider, onSelect }: NavBarProps) {
    const RouterWrap = hasRounter ? BrowserRouter : Fragment;
    const check = useRef<HTMLInputElement>(null);

    const onSelectDecorator = (provider: Provider) => {
        onSelect(provider);
    }
    return (
        <RouterWrap>
            <nav>
                <input type="checkbox" ref={check} className="menuToggle" id="menuToggle" />
                <label htmlFor="menuToggle">
                    <div className="user">
                        {provider.user.avatar ?
                            <img src={provider.user.avatar} /> : <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" stroke="white" strokeLinejoin="round" strokeWidth="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>}
                        <div className="provider">{provider.name}</div>
                        <a href={provider.user.link}>{provider.user.name}</a>
                    </div>
                </label>
                <ul>
                    <li>
                        <Link to="/" onClick={() => { check.current!!.checked = false }}>Home</Link>
                    </li>
                    <li>
                        <Link to="/assignments" onClick={() => { check.current!!.checked = false }}>Assignments</Link>
                    </li>
                    <li>
                        <Link to="/repos" onClick={() => { check.current!!.checked = false }}>Repos</Link>
                    </li>
                    <li>
                        <Link to="/commits" onClick={() => { check.current!!.checked = false }}>Commits</Link>
                    </li>
                </ul>
                <div className="providers">
                    <Select
                        items={["Github", "Gitlab", "Bitbucket"]}
                        onSelect={onSelectDecorator}
                        selected={provider.name}
                    />
                </div>
            </nav>
        </RouterWrap>
    );
}