import { Heading } from '../misc/heading';
import Commit from './Commit'
import { CommitType } from './CommitType';

export default function Commits({ commits }: {commits : CommitType[]}) {
    return (<div>
        <Heading title="Commits"/>
        <div className="grid-container">
            {commits.map((c: CommitType, i: number) => <Commit key={c.sha} {...c} />)}
        </div>
    </div>)
}