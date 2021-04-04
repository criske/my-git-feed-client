import { useMemo } from 'react';
import './repos.css';
import { RepoType } from './RepoType';

function formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleString();
}

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