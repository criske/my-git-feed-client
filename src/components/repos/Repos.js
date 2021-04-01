import { useContext, useEffect } from "react"
import { StateContext } from "../../state/StateContext.tsx"

export default function Assignments({ location }) {
    const { state, actions } = useContext(StateContext);
    useEffect(() => {
        actions.fetch("repos", [state.provider.name], "repos")
    }, [location.key, state.provider.name])
    return (<div>
        <h4>Owned Repositories</h4>
        <p>{JSON.stringify(state.pages.repos)}</p>
    </div>)
}