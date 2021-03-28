import './fetch.css'

export default function Fetch({ isLoading, error, onRetry, onCancel }) {
    return (
        <div className="fetch-container">
            { (isLoading) ?
                <>
                    <p>Loading Modal</p>
                    <button onClick={onCancel}>Cancel</button>
                </>
                : <div>{error} <button onClick={onRetry}>Retry</button> </div>
            }
        </div>
    )
}
