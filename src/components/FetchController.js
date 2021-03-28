import React, { useContext, useEffect, useState } from "react"
import service from "./../service/MyGitFeedService";
import { StateContext } from "../state/StateContext";

export default function FetchController({ children }) {
    const { state, actions } = useContext(StateContext)
    const [retryCount, setRetryCount] = useState(0);
    const [cancelHandler, setCancelHandler] = useState(() => {});
    const [err, setErr] = useState(null)
    const onRetry = () => { setRetryCount(retryCount + 1); }
    const onCancel = () => {
        cancelHandler();
        actions.loading(false);
        setErr("Canceled");
    }
    useEffect(() => {
        const call = state.fetch.call.name;
        if (call != null) {
            const remoteCall = service[call]
                .apply(null, state.fetch.call.args)
            actions.loading(true);
            remoteCall
                .request
                .then((result) => {
                    setErr(null);
                    actions[state.fetch.onSuccess.name].apply(null, result)
                })
                .catch(setErr)
                .finally(() => actions.loading(false));
            setCancelHandler(() => remoteCall.cancel)
        }
    }, [retryCount, state.fetch.call.name]);
    const ChildrenWithProps = React.Children.map(children, (child) => {
        console.log(err)
        return React.cloneElement(child, {
            isLoading: state.fetch.loading,
            error: err,
            onRetry: onRetry,
            onCancel: onCancel
        })
    });
    return ChildrenWithProps;
}