import { useContext, useEffect } from "react";
import { StateContext } from "../../state/StateContext";
import service from "../../service/MyGitFeedService";
import NavBar from "./NavBar";

export default function NavBarController({ hasRounter }) {
    const { state, actions } = useContext(StateContext);
    const onSelect = (provider) => actions.provider(provider);
    useEffect(() => {
        state.loading?.call(null);
        const user = service.user(state.provider.name);
        actions.loading(user.cancel);
        user.request.then(actions.user);
        return () => user.cancel();
    }, [state.provider.name])
    return (<NavBar provider={state.provider} onSelect={onSelect} hasRounter={hasRounter} />)
}

NavBarController.defaultProps = {
    hasRounter: false,
}