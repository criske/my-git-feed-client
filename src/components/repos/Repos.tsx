import { Heading } from '../misc/heading';
import Repo from './Repo';
import './repos.css';
import { RepoType } from './RepoType';

export default function Repos({ repos }: { repos: RepoType[] }) {
    return (
        <div>
            <Heading title="Owned Repositories"/>
            <div className="grid-container">{repos.map((r: RepoType) => <Repo key={r.name} {...r} />)}</div>
        </div>
    );
}