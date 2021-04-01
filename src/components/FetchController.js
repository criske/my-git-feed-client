import React, { useContext, useEffect, useReducer, useState } from "react"
import { StateContext } from "../state/StateContext.tsx";
import service from "./../service/MyGitFeedService.ts";

export default function FetchController({ children }) {

    const { state, actions } = useContext(StateContext);

    const [retryCount, setRetryCount] = useState(0);
    const [cancelHandler, setCancelHandler] = useState(() => {});
    const [err, setErr] = useState(null);
    
    const onRetry = () => { setRetryCount(retryCount + 1); }
    const onCancel = () => {
        cancelHandler();
        actions.loading(false);
        setErr("Canceled");
    }

    const remoteCallFnNameHashed = state.fetch.call.name

    useEffect(() => {
        if (remoteCallFnNameHashed != null) {
            const remoteCallFnName = state.fetch.call.name.split('#')[0]; //remove the hash part
            cancelHandler?.call(null);
            actions.loading(true);
            setErr(null);
            const remoteCall = service[remoteCallFnName]
                .call(null, state.fetch.call.args);
            remoteCall
                .request
                .then((result) => {
                    const actionDispatchName = state.fetch.call.stateActionType;
                    actions[actionDispatchName].call(null, result)
                })
                .catch(setErr)
                .finally(() => actions.loading(false));
            setCancelHandler(() => remoteCall.cancel)
        }
    }, [retryCount, remoteCallFnNameHashed]);
    
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