import { Fragment, useContext } from "react";
import { StateContext } from "../state/StateContext";
import Main from "../components/Main";
import SplashController from "../components/SplashController";

export default function StartUp() {
    const { state } = useContext(StateContext);
    return (
        <Fragment>
            {
                state.ready ? <Main /> : <SplashController />
            }
        </Fragment>
    );
}