import { useContext, useEffect, useState } from "react"
import { ActionType } from "../../state/State";
import { StateContext } from "../../state/StateContext";
import { History } from 'history';
import { CommitType } from "./CommitType";
import Commits from "./Commits";
import { PagingType } from "../misc/heading/PagingType";

export default function CommitsController({ location }: History) {
    const { state, actions } = useContext(StateContext);
    const [page, setPage] = useState(1);
    useEffect(() => {
        actions.fetch("commits", ActionType.COMMITS, [state.provider.name, page]);
    }, [location.key]);
    useEffect(() => {
        actions.fetch("commits", ActionType.COMMITS, [state.provider.name, 1]);
    }, [state.provider.name]);
    useEffect(() => {
        actions.fetch("commits", ActionType.COMMITS, [state.provider.name, page]);
    }, [page]);
    const commits: CommitType[] = (state.pages.commits.entries || []).map((c: any) => ({
        date: c.date,
        sha: c.sha,
        url: c.url,
        message: c.message,
        repo: {
            name: c.repo.fullName,
            url: c.repo.url
        },
    }))
    const paging: PagingType = {
        current: state.pages.commits.paging.current,
        max: state.pages.commits.paging.max,
        onSelect: setPage
    }
    return (<Commits commits={commits} paging={paging} />)
}