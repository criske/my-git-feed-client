import { useContext, useEffect, useState } from "react";
import { ActionType, Provider } from "../../state/State";
import { StateContext } from "../../state/StateContext";
import NavBar from "./NavBar";

export default function NavBarController() {
    const { state, actions } = useContext(StateContext);
    const [provider, setProvider] = useState({ name: state.provider.name, refresh: 0 });
    const providerRefresh = (name: Provider) => setProvider(prev => ({name: name, refresh: prev.refresh +1 }));
    useEffect(() => {
        actions.fetch("user", ActionType.USER, [provider.name]);
    }, [provider])
    return (<NavBar provider={state.provider} onSelect={providerRefresh} hasRounter={false} />)
}

NavBarController.defaultProps = {
    hasRounter: false,
}