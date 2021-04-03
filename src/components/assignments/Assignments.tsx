import { useContext, useEffect } from "react"
import { ActionType } from "../../state/State";
import { StateContext } from "../../state/StateContext"
import { History } from 'history';

export default function Assignments({ location } : History) {
    const { state, actions } = useContext(StateContext);
    useEffect(() => {
        actions.fetch("assignments", ActionType.ASSIGNMENTS, [state.provider.name]);
    }, [location.key, state.provider.name])
    return (<div>
        <h2>Assignments</h2>
        <p>{JSON.stringify(state.pages.assignments)}</p>
    </div>)
}