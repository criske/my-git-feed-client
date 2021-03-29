import React, { useContext, useEffect, useState } from "react"
import service from "./../service/MyGitFeedService";
import { StateContext } from "../state/StateContext";

export default function FetchController({ children }) {
    const { state, actions } = useContext(StateContext);

    const [retryCount, setRetryCount] = useState(0);
    const [cancelHandler, setCancelHandler] = useState(() => {});
    const [err, setErr] = useState(null)
    
    const onRetry = () => { setRetryCount(retryCount + 1); }
    const onCancel = () => {
        cancelHandler();
        actions.loading(false);
        setErr("Canceled");
    }
    const remoteCallFnName = state.fetch.call.name;
    useEffect(() => {
        if (remoteCallFnName != null) {
            actions.loading(true);
            const remoteCall = service[remoteCallFnName]
                .apply(null, state.fetch.call.args);
            remoteCall
                .request
                .then((result) => {
                    setErr(null);
                    const actionDispatchName = state.fetch.onSuccess.name;
                    actions[actionDispatchName].apply(null, result)
                })
                .catch(setErr)
                .finally(() => actions.loading(false));
            setCancelHandler(() => remoteCall.cancel)
        }
    }, [retryCount, remoteCallFnName]);
    const ChildrenWithProps = React.Children.map(children, (child) => {
        return React.cloneElement(child, {
            isLoading: state.fetch.loading,
            error: err,
            onRetry: onRetry,
            onCancel: onCancel
        })
    });
    return ChildrenWithProps;
}