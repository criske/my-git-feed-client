import { AssignmentType } from "./AssignmentType";

export default function Assignment(assignment: AssignmentType){
    return(
        <div className="card assignment">{assignment.title}</div>
    );
}