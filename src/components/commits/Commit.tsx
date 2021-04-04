import { CommitType } from "./CommitType";
import { formatDate } from '../../utils';

export default function Commit(commit: CommitType) {
    return (
        <div className="card">
            <div>
                <div>{commit.repo.name}</div>
                <div> {commit.sha} </div>
                <div> {formatDate(commit.date)}</div>
            </div>
            <div>{commit.message || "No message"}</div>
        </div>
    )
}