import { AssignmentType } from './AssignmentType'
import Assignment from './Assignment';
import { Heading } from '../misc/heading';
import { PagingType } from '../misc/heading/PagingType';

export default function Assignments({ assignments, paging }: { assignments: AssignmentType[], paging: PagingType }) {
    return (<div>
        <Heading title="Assignments" paging={paging} />
        <div className="grid-container">
            {assignments.map((a: AssignmentType, i: number) => <Assignment key={i} {...a} />)}
        </div>
    </div>)
}