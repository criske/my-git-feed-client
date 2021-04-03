import Repo from './Repo';
import './repos.css';
import { RepoType } from './RepoType';

export default function Repos({ repos }: { repos: RepoType[] }) {
    return (
        <div>
            <h2>Owned repositories</h2>
            <div className="repos">{repos.map((r: RepoType) => <Repo key={r.name} {...r} />)}</div>
        </div>

    );
}