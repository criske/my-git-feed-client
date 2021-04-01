import { useContext, useEffect } from "react"
import { StateContext } from "../../state/StateContext.tsx"

export default function Assignments({ location }) {
    const { state, actions } = useContext(StateContext);
    useEffect(() => {
        actions.fetch("assignments", [state.provider.name], "assignments")
    }, [location.key, state.provider.name])
    return (<div>
        <h4>Assignments</h4>
        <p>{JSON.stringify(state.pages.assignments)}</p>
    </div>)
}