import { Fragment, useContext } from "react";
import { StateContext } from "../state/StateContext";
import Splash from "../components/Splash";
import Main from "../components/Main";

export default function StartUp() {
    const { state } = useContext(StateContext);
    return (
        <Fragment>
            {
                state.ready ? <Main /> : <Splash />
            }
        </Fragment>
    );
}