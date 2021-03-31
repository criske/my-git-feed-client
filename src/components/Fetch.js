import { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './fetch.css';

const FetchTest = () => {
    const [retry, setRetry] = useState(0);
    const [loadingState, setLoadingState] = useState({
        isLoading: true,
        error: null
    })
    const onRetry = () => setRetry(prev => prev + 1);
    useEffect(() => {
        setLoadingState({ isLoading: true, error: null });
        setTimeout(() => {
            setLoadingState({ isLoading: false, error: "Error!!!" });
        }, 5000);
    }, [retry]);
    return (<Fetch isLoading={loadingState.isLoading} error={loadingState.error} onRetry={onRetry}></Fetch>)
}

export { FetchTest };

const Error = ({ error, onRetry, onClose }) => (
    <div className="error-box">
        <svg onClick={onClose} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
        </svg>
        <p>{error}</p>
        <a onClick={onRetry}>Retry</a>
    </div>
);

const Spinner = () => (<div className="loading-spinner" />);

export default function Fetch({ isLoading, error, onRetry }) {
    const [showMessage, setShowMessage] = useState(!isLoading && (error !== null));
    const onRetryAfterAnim = () => setShowMessage(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(!isLoading && error != null)
    }, [isLoading, error])
    
    return (
        <div className="fetch-container">
            {isLoading && <Spinner />}
            {open && <Error error={error} onRetry={onRetry} onClose={() => setOpen(false)} />}
            {/* <CSSTransition in={isLoading}
                timeout={3000}
                unmountOnExit
                onExited={() => setShowMessage(error !== null)}
                classNames="loading-fade">
                <Spinner />
            </CSSTransition>
            {(error!=null) && <CSSTransition
                in={showMessage}
                timeout={3000}
                unmountOnExit
                onExited={onRetry}
                classNames="fade">
                <Error error={error} onRetry={onRetryAfterAnim} />
            </CSSTransition>} */}
        </div>
    )
}
