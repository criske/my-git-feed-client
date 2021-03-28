import { useContext } from "react";
import { StateContext } from "../../state/StateContext";
import Main from "../Main";
import LoadingController from "../LoadingController";
import Splash from "./Splash";

export default function StartUp() {
    const { state } = useContext(StateContext);
    return (
        <>
            {
                state.ready ? <Main /> : <LoadingController><Splash/></LoadingController>
            }
        </>
    );
}