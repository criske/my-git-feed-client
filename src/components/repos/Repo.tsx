import { useMemo } from 'react';
import { formatDate } from '../../utils';
import { Card } from '../misc/card';
import './repos.css';
import { RepoType } from './RepoType';

function Stars({ stars }: { stars: number }) {
    return (<div className="__repo-stars">
        <svg fill="gold"
            stroke="lightgray" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
        <span>{stars}</span>
    </div>)
}

function Language({ language }: { language: string }) {
    return (<span className="__repo-language-pill">{language}</span>)
}

export default function Repo(repo: RepoType) {
    const createdAt: String = useMemo<String>(() => formatDate(repo.createdAt), [repo.createdAt]);
    const updatedAt: String = useMemo(() => formatDate(repo.updatedAt), [repo.updatedAt])
    return (
        <Card
            title={repo.name}
            subtitle={repo.url}
            body={
                <div>{repo.description || "No description"}</div>
            }
            footer={
                <div className="__repo-footer">
                    <Stars stars={repo.stars} />
                </div>
            }
        >
            <Language language={repo.language} />
        </Card>
    );
}