import React, { useContext, useEffect, useState} from "react"
import service from "../service/MyGitFeedService";
import { StateContext } from "../state/StateContext";

export default function LoadingController({ children }) {
    const { state, actions } = useContext(StateContext)
    const [retryCount, setRetryCount] = useState(0);
    const onRetry = () => { setRetryCount(retryCount + 1); }
    const onCancel = () => actions.cancel()
    useEffect(() => {
        const ping = service.ping();
        actions.fetch(ping, actions.ready);
        return ping.cancel;
    }, [retryCount])
    const ChildrenWithProps = React.Children.map(children, (child) => {
        return React.cloneElement(child, {
            isLoading : state.loading !== null,
            error : state.error,
            onRetry: onRetry,
            onCancel: onCancel
        })
    });
    return ChildrenWithProps;
}