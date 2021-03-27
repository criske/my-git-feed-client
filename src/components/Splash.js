import { Fragment, useEffect } from 'react'
import './splash.css'

export default function Splash({ isLoading, error, onRetry, onCancel }) {
    return (
        <div className="splash-container">
            { (isLoading) ?
                <Fragment>
                    <h1>Waking up the server</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                    <button onClick={onCancel}>Cancel</button>
                </Fragment>
                : <div>{error} <button onClick={onRetry}>Retry</button> </div>
            }
        </div>
    )
}

Splash.defaultProps = {
    onCancel: () => { },
    onRetry: () => { },
    error: null,
    isLoading: false,
}