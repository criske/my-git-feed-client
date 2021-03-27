import { Fragment } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import './navBar.css'

export default function NavBar({ hasRounter, provider, onSelect }) {
    const RouterWrap = hasRounter ? BrowserRouter : Fragment;
    const handleChange = (e) => {
        onSelect(e.target.value);
    }
    return (
        <RouterWrap>
            <nav>
                <div className="user">
                    {provider.user.avatar ?
                        <img src={provider.user.avatar} /> : <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" stroke="white" strokeLinejoin="round" strokeWidth="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>}
                    <div className="provider">{provider.name}</div>
                    <a href={provider.user.link}>{provider.user.name}</a>
                </div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/assignments">Assignments</Link>
                    </li>
                    <li>
                        <Link to="/repos">Repos</Link>
                    </li>
                    <li>
                        <Link to="/commits">Commits</Link>
                    </li>
                </ul>
                <div className="providers">
                    <select value={provider.name} onChange={handleChange}>
                        <option value="Github">Github</option>
                        <option value="Gitlab">Gitlab</option>
                        <option value="Bitbucket">Bitbucket</option>
                    </select>
                </div>
            </nav>
        </RouterWrap>
    );
}

NavBar.defaultProps = {
    hasRounter: false,
    provider: {
        name: "",
        user: {
            name: '',
            avatar: null,
            link: ''
        },
    },
    onSelect: (provider) => { }
}