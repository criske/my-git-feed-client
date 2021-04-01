import { useContext, useEffect } from "react"
import { ActionType } from "../../state/State";
import { StateContext } from "../../state/StateContext";
import { History } from 'history';

export default function Assignments({ location } : History) {
    const { state, actions } = useContext(StateContext);
    useEffect(() => {
        actions.fetch("repos", ActionType.REPOS, [state.provider.name])
    }, [location.key, state.provider.name])
    return (<div>
        <h4>Owned Repositories</h4>
        <p>{JSON.stringify(state.pages.repos)}</p>
    </div>)
}