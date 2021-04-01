import { useContext } from "react";
import { StateContext } from "../../state/StateContext.tsx";
import Main from "../Main";
import FetchController from "../FetchController";
import SplashController from "./SplashController";

export default function StartUp() {
    const { state } = useContext(StateContext);
    return (
        <>
            {
                state.ready ? <Main /> : <FetchController><SplashController/></FetchController>
            }
        </>
    );
}