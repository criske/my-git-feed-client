import { useContext, useEffect } from "react";
import { StateContext } from "../state/StateContext";
import NavBar from "./NavBar";

export default function NavBarController({hasRounter}) {
    const { state, dispatchers } = useContext(StateContext);
    const onSelect = (provider) => dispatchers.provider(provider);
    useEffect(() => {
        dispatchers.loading([])
        setTimeout(() => {
            dispatchers.user({
                name: 'criske/' + state.provider.name.substring(2),
                avatar: 'https://avatars.githubusercontent.com/u/10284893?s=400&v=4"',
                link: 'https://github.com/criske'
            })
        }, 2000)
    }, [state.provider.name])
    return (<NavBar provider={state.provider} onSelect={onSelect} hasRounter={hasRounter} />)
}

NavBarController.defaultProps = {
    hasRounter: false,
}