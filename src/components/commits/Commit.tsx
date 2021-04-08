import { CommitType } from "./CommitType";
import { formatDate } from '../../utils';
import { Card } from "../misc/card";
import MarkDownIt from 'markdown-it';
import { useMemo } from "react";

export default function Commit(commit: CommitType) {
    const md = useMemo(() => MarkDownIt(), []);
    const htmlBody = useMemo(() => {
        const parsed = md.render(commit.message || '');
        return parsed;
    }, [commit.message]);
    return (
        <Card
            title={commit.repo.name}
            subtitle={commit.sha}
            body={<div dangerouslySetInnerHTML={{ __html: htmlBody }}></div>}
            footer={formatDate(commit.date)}
        >
        </Card>
    )
}