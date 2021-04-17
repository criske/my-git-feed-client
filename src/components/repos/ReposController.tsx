import { useContext, useEffect, useState } from "react"
import { ActionType } from "../../state/State";
import { StateContext } from "../../state/StateContext";
import { History } from 'history';
import { RepoType } from "./RepoType";
import Repos from "./Repos";
import { PagingType } from "../misc/heading/PagingType";

export default function ReposController({ location }: History) {
    const { state, actions } = useContext(StateContext);
    const [page, setPage] = useState(1);

    useEffect(() => {
        actions.fetch("repos", ActionType.REPOS, [state.provider.name, page])
    }, [location.key, state.provider.name, page])
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
    const paging: PagingType = {
        current: state.pages.repos.paging.current,
        max: state.pages.repos.paging.max,
        onSelect: setPage
    }
    return (<Repos repos={repos} paging={paging}></Repos>);
}