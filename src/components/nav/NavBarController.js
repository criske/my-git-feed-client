import { useContext, useEffect, useState } from "react";
import { StateContext } from "../../state/StateContext";
import NavBar from "./NavBar";

export default function NavBarController({ hasRounter }) {
    const { state, actions } = useContext(StateContext);
    const [provider, setProvider] = useState(state.provider.name);
    useEffect(() => {
        actions.fetch("user", [provider], "user");
    }, [provider])
    return (<NavBar provider={state.provider} onSelect={setProvider} hasRounter={hasRounter} />)
}

NavBarController.defaultProps = {
    hasRounter: false,
}