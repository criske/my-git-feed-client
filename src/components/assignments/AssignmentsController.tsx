import { useContext, useEffect } from "react"
import { ActionType } from "../../state/State";
import { StateContext } from "../../state/StateContext"
import { History } from 'history';
import { AssignmentType } from "./AssignmentType";
import Assignments from "./Assignments";

export default function AssignmentsController({ location }: History) {
    const { state, actions } = useContext(StateContext);
    useEffect(() => {
        actions.fetch("assignments", ActionType.ASSIGNMENTS, [state.provider.name]);
    }, [location.key, state.provider.name]);
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
    return (<Assignments assignments={assignments} />)
}