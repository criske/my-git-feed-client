import { useContext, useEffect } from "react"
import { ActionType } from "../../state/State";
import { StateContext } from "../../state/StateContext";
import { History } from 'history';
import { CommitType } from "./CommitType";
import Commits from "./Commits";

export default function CommitsController({ location }: History) {
    const { state, actions } = useContext(StateContext);
    useEffect(() => {
        actions.fetch("commits", ActionType.COMMITS, [state.provider.name])
    }, [location.key, state.provider.name]);
    const commits: CommitType[] = (state.pages.commits.entries || []).map((c: any) => ({
        date: c.date,
        sha: c.sha,
        url: c.url,
        message: c.message,
        repo: {
            name: c.repo.fullName,
            url: c.repo.url
        }
    }))
    return (<Commits commits={commits} />)
}