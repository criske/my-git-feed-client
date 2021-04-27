import About from '../about'
import { FetchContext } from '../FetchContext'
import './splash.css'

export default function Splash({ isLoading, error, onRetry, onCancel }: FetchContext) {
    return (
        <div className="splash-container">
            <div className="splash-waking">
                {(isLoading) ?
                    <>
                        <h1>Waking up the server</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                        </svg>
                        <button onClick={onCancel}>Cancel</button>
                    </>
                    : <div>{error} <button onClick={onRetry}>Retry</button> </div>
                }
            </div>
            <div className="splash-about">
                <About />
            </div>
        </div>
    )
}

Splash.defaultProps = {
    onCancel: () => { },
    onRetry: () => { },
    error: null,
    isLoading: false,
}