import { useContext, useEffect } from "react";
import { StateContext } from "../../state/StateContext";
import service from "../../service/MyGitFeedService";
import NavBar from "./NavBar";

export default function NavBarController({ hasRounter }) {
    const { state, dispatchers } = useContext(StateContext);
    const onSelect = (provider) => dispatchers.provider(provider);
    useEffect(() => {
        state.loading?.call(null);
        const user = service.user(state.provider.name);
        dispatchers.loading(user.abort);
        user.request.then(dispatchers.user);
        return () => user.abort();
    }, [state.provider.name])
    return (<NavBar provider={state.provider} onSelect={onSelect} hasRounter={hasRounter} />)
}

NavBarController.defaultProps = {
    hasRounter: false,
}