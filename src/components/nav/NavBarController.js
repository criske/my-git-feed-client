import { useContext, useEffect, useState } from "react";
import { ActionType } from "../../state/State";
import { StateContext } from "../../state/StateContext.tsx";
import NavBar from "./NavBar";

export default function NavBarController({ hasRounter }) {
    const { state, actions } = useContext(StateContext);
    const [provider, setProvider] = useState(state.provider.name);
    useEffect(() => {
        actions.fetch("user", ActionType.USER, [provider]);
    }, [provider])
    return (<NavBar provider={state.provider} onSelect={setProvider} hasRounter={hasRounter} />)
}

NavBarController.defaultProps = {
    hasRounter: false,
}