import { useContext } from "react";
import { StateContext } from "../../state/StateContext";
import Main from "../Main";
import SplashController from "./SplashController";

export default function StartUp() {
    const { state } = useContext(StateContext);
    return (
        <>
            {
                state.ready ? <Main /> : <SplashController/>
            }
        </>
    );
}