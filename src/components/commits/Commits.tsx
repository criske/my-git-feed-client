import { Heading } from '../misc/heading';
import { PagingType } from '../misc/heading/PagingType';
import Commit from './Commit'
import { CommitType } from './CommitType';

export default function Commits({ commits, paging }: { commits: CommitType[], paging: PagingType }) {
    return (<div>
        <Heading title="Commits" paging={paging} />
        <div className="grid-container">
            {commits.map((c: CommitType, i: number) => <Commit key={c.sha} {...c} />)}
        </div>
    </div>)
}