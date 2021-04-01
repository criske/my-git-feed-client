import { useContext, useEffect } from "react"
import { StateContext } from "../../state/StateContext.tsx"

export default function Commits({ location }) {
    const { state, actions } = useContext(StateContext);
    useEffect(() => {
        actions.fetch("commits", [state.provider.name], "commits")
    }, [location.key, state.provider.name])
    return (<div>
        <h4>Commits</h4>
        <p>{JSON.stringify(state.pages.commits)}</p>
    </div>)
}