import { AssignmentType } from './AssignmentType'
import Assignment from './Assignment';

export default function Assignments({ assignments }: { assignments: AssignmentType[] }) {
    return (<div>
        <h2>Assignments</h2>
        <div className="grid-container">
            {assignments.map((a: AssignmentType, i: number) => <Assignment key={i} {...a} />)}
        </div>
    </div>)
}