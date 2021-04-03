import { useContext, useEffect } from "react"
import { ActionType } from "../../state/State";
import { StateContext } from "../../state/StateContext";
import { History } from 'history';
import { RepoType } from "./RepoType";
import Repos from "./Repos";

export default function ReposController({ location }: History) {
    const { state, actions } = useContext(StateContext);
    useEffect(() => {
        actions.fetch("repos", ActionType.REPOS, [state.provider.name])
    }, [location.key, state.provider.name])
    const entries = state.pages.repos.entries || [];
    const repos: RepoType[] = entries.map((r: any) => ({
        name: r.simple.name,
        url: r.simple.url,
        language: r.language,
        description: r.description === null ? undefined : r.description,
        organization: r.organization === null ? undefined : r.organization,
        createdAt: r.createdAt,
        updatedAt: r.updatedAt,
        stars: r.stars,
    }));
    return (<Repos repos = {repos}></Repos>);
}