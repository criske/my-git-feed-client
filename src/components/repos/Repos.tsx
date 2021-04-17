import { Heading } from '../misc/heading';
import { PagingType } from '../misc/heading/PagingType';
import Repo from './Repo';
import './repos.css';
import { RepoType } from './RepoType';

export default function Repos({ repos, paging }: { repos: RepoType[], paging: PagingType }) {
    return (
        <div>
            <Heading title="Owned Repositories" paging={paging} />
            <div className="grid-container">{repos.map((r: RepoType) => <Repo key={r.name} {...r} />)}</div>
        </div>
    );
}