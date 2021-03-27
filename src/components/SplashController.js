import { useContext, useEffect, useState } from "react"
import service from "../service/MyGitFeedService";
import { StateContext } from "../state/StateContext";
import Splash from "./Splash";

export default function SplashController() {
    const { state, actions } = useContext(StateContext)
    const [retryCount, setRetryCount] = useState(0);
    const onRetry = () => {setRetryCount(retryCount + 1); }
    const onCancel = () => actions.cancel()
    useEffect(() => {
        const ping = service.ping();
        actions.fetch(ping, actions.ready);
        return ping.cancel;
    }, [retryCount])
    return (<Splash isLoading={state.loading !== null} error={state.error} onRetry={onRetry} onCancel={onCancel} />);
}