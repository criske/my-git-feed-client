import { useContext, useEffect } from "react";
import { StateContext } from "../../state/StateContext.tsx";
import Splash from "./Splash";

export default function SplashController(props) {
    const { actions } = useContext(StateContext);
    useEffect(() => {
        actions.fetch("ping", [], "ready");
    }, []);
    return (<Splash {...props} />);
}