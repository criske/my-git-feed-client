import { AssignmentType } from './AssignmentType'
import Assignment from './Assignment';
import { Heading } from '../misc/heading';

export default function Assignments({ assignments }: { assignments: AssignmentType[] }) {
    return (<div>
        <Heading title="Assignments"/>
        <div className="grid-container">
            {assignments.map((a: AssignmentType, i: number) => <Assignment key={i} {...a} />)}
        </div>
    </div>)
}