import Commit from './Commit'
import { CommitType } from './CommitType';

export default function Commits({ commits }: {commits : CommitType[]}) {
    return (<div>
        <h2>Commits</h2>
        <div className="grid-container">
            {commits.map((c: CommitType, i: number) => <Commit key={c.sha} {...c} />)}
        </div>
    </div>)
}