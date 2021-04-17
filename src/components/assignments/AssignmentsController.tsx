import { useContext, useEffect, useState } from "react"
import { ActionType } from "../../state/State";
import { StateContext } from "../../state/StateContext"
import { History } from 'history';
import { AssignmentType } from "./AssignmentType";
import Assignments from "./Assignments";
import { PagingType } from "../misc/heading/PagingType";

export default function AssignmentsController({ location }: History) {
    const { state, actions } = useContext(StateContext);
    const [page, setPage] = useState(1);
    useEffect(() => {
        actions.fetch("assignments", ActionType.ASSIGNMENTS, [state.provider.name, page]);
    }, [location.key, state.provider.name, page]);
    const assignments: AssignmentType[] = (state.pages.assignments.entries || []).map((a: any) => ({
        title: a.title,
        body: a.body,
        url: a.url,
        repo: {
            name: a.repo.fullName,
            url: a.repo.url
        },
        author: {
            name: a.author.name,
            avatar: a.author.avatar,
            url: a.author.url
        }
    }))
    const paging: PagingType = {
        current: state.pages.assignments.paging.current,
        max: state.pages.assignments.paging.max,
        onSelect: setPage
    }
    return (<Assignments assignments={assignments} paging = {paging} />)
}