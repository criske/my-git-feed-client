import { useMemo } from 'react';
import { formatDate } from '../../utils';
import './repos.css';
import { RepoType } from './RepoType';

export default function Repo(repo: RepoType) {
    const createdAt: String = useMemo<String>(() => formatDate(repo.createdAt), [repo.createdAt]);
    const updatedAt: String = useMemo(() => formatDate(repo.updatedAt), [repo.updatedAt])
    return (
        <div className="card repo">
            <div>
                <a href={repo.url}>{repo.name}</a>
                <div>{repo.language}</div>
                <div>{repo.stars}</div>
            </div>
            <div>{repo.description || "No description"}</div>
            <div>
                <div>Created: {createdAt}</div>
                <div>Updated: {updatedAt}</div>
            </div>
        </div>
    );
}