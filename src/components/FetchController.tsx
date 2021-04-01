import React, { ReactElement, ReactNode, useContext, useEffect, useState } from "react"
import { ActionType } from "../state/State";
import { StateContext } from "../state/StateContext";
import service, { CancelHandler, FetchResult } from "./../service/MyGitFeedService";

export interface FetchProps {
    isLoading: boolean;
    error: String | null;
    onRetry: () => void;
    onCancel: () => void;
}

export default function FetchController({ children }: { children: ReactNode }): ReactNode {

    const { state, actions } = useContext<StateContext>(StateContext);

    const [retryCount, setRetryCount] = useState(0);
    const [cancelHandler, setCancelHandler] = useState<CancelHandler>(() => { });
    const [err, setErr] = useState<String | null>(null);

    const onRetry = () => { setRetryCount(retryCount + 1); }
    const onCancel = () => {
        cancelHandler();
        actions.loading(false);
        setErr("Canceled");
    }

    const fetchCallNameHashed = state.fetch.call.name

    useEffect(() => {
        if (fetchCallNameHashed != null) {
            const fetchCallName = fetchCallNameHashed.split('#')[0]; //remove the hash part
            cancelHandler?.call(null);
            actions.loading(true);
            setErr(null);
            const remoteCall: FetchResult = service[fetchCallName]
                .call<null, any, FetchResult>(null, state.fetch.call.args);
            remoteCall
                .request
                .then((result) => {
                    const actionDispatchName: ActionType = state.fetch.call.stateActionType;
                    actions.dispatch(actionDispatchName, result);
                })
                .catch(setErr)
                .finally(() => actions.loading(false));
            setCancelHandler(() => remoteCall.cancel)
        }
    }, [retryCount, fetchCallNameHashed]);

    return React.Children.map<ReactElement<FetchProps>, ReactNode>(children, (child) => {
        return React.cloneElement(child as ReactElement<FetchProps>, {
            isLoading: state.fetch.loading,
            error: err,
            onRetry: onRetry,
            onCancel: onCancel
        })
    });;
}