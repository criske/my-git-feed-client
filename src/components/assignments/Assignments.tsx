import { AssignmentType } from './AssignmentType'
import Assignment from './Assignment';
import { Heading } from '../misc/heading';
import { PagingType } from '../misc/heading/PagingType';
import { SelectType } from '../misc/select';

export default function Assignments({ assignments, paging, filter }: { assignments: AssignmentType[], paging: PagingType, filter: SelectType<string> }) {
    return (<div>
        <Heading title="Assignments" paging={paging} filter={filter} />
        <div className="grid-container">
            {assignments.map((a: AssignmentType, i: number) => <Assignment key={i} {...a} />)}
        </div>
    </div>)
}