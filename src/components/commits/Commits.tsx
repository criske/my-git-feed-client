import { useContext, useEffect } from "react"
import { ActionType } from "../../state/State";
import { StateContext } from "../../state/StateContext";
import { History } from 'history';

export default function Commits({ location }: History) {
    const { state, actions } = useContext(StateContext);
    useEffect(() => {
        actions.fetch("commits", ActionType.COMMITS, [state.provider.name])
    }, [location.key, state.provider.name])
    return (<div>
        <h4>Commits</h4>
        <p>{JSON.stringify(state.pages.commits)}</p>
    </div>)
}