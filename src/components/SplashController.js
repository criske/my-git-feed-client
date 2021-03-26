import { useContext, useEffect } from "react"
import service from "../service/MyGitFeedService";
import { StateContext } from "../state/StateContext";
import Splash from "./Splash";

export default function SplashController() {
    const { dispatchers } = useContext(StateContext)
    useEffect(() => {
        const ping = service.ping();
        dispatchers.loading(ping.abort);
        ping.request.then(dispatchers.ready);
        return () => ping.abort();
    }, [])
    return (<Splash/>);
}