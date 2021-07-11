import { useContext, useEffect, useState } from "react"
import { ActionType } from "../../state/State";
import { StateContext } from "../../state/StateContext"
import { History } from 'history';
import { AssignmentType } from "./AssignmentType";
import Assignments from "./Assignments";
import { PagingType } from "../misc/heading/PagingType";
import { SelectType } from "../misc/select";

export default function AssignmentsController({ location }: History) {
    const { state, actions } = useContext(StateContext);
    const [filterPage, setFilterPage] = useState({
        page: 1,
        filter: state.pages.assignments?.filter || "OPEN"
    });
    useEffect(() => {
        actions.fetch("assignments", ActionType.ASSIGNMENTS, [state.provider.name, filterPage.page, filterPage.filter]);
    }, [location.key, state.provider.name, filterPage]);
    const assignments: AssignmentType[] = (state.pages.assignments.entries || []).map((a: any) => ({
        title: {
            title: a.title,
            href: a.url
        },
        body: a.body,
        repo: {
            title: a.repo.fullName,
            href: a.repo.url
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
        onSelect: (page) => {
            setFilterPage((prev) => ({ ...prev, page: page }));
        }
    }
    const filtering: SelectType<string> = {
        items: ["ALL", "CLOSED", "OPEN"],
        selected: filterPage.filter,
        onSelect: (filter) => {
            setFilterPage({ page: 1, filter: filter });
        }
    };

    return (<Assignments assignments={assignments} paging={paging} filter={filtering} />)
}