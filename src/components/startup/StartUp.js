import { useContext } from "react";
import { StateContext } from "../../state/StateContext";
import Main from "../Main";
import FetchController from "../FetchController";
import SplashController from "./SplashController";
import Fetch from "../Fetch";

export default function StartUp() {
    const { state } = useContext(StateContext);
    return (
        <>
            {
                state.ready ? <Main /> : <FetchController><Fetch/><SplashController/></FetchController>
            }
        </>
    );
}