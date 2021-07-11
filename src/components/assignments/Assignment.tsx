import { Card } from "../misc/card";
import { AssignmentType } from "./AssignmentType";
import MarkDownIt from 'markdown-it';
import { useMemo } from "react";

export default function Assignment(assignment: AssignmentType) {
    const md = useMemo(() => MarkDownIt(), []);
    const htmlBody = useMemo(() => {
        const parsed = md.render(assignment.body);
        return parsed;
    }, [assignment.body]);
    return (
        <Card
            title={assignment.title}
            body={
                <div dangerouslySetInnerHTML={{ __html: htmlBody }}></div>
            }>
        </Card>
    );
}