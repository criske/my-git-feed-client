import { useContext, useEffect } from "react";
import { ActionType } from "../../state/State";
import { StateContext } from "../../state/StateContext";
import { FetchContext } from "../FetchContext";
import Splash from "./Splash";

export default function SplashController() {
    const { actions } = useContext<StateContext>(StateContext);
    const fetchContext = useContext(FetchContext)
    useEffect(() => {
        actions.fetch("ping", ActionType.READY);
    }, []);
    return (<Splash {...fetchContext} />);
}