import './fetch.css'

export default function Fetch({ isLoading, error, onRetry, onCancel }) {
    return (
        <div className="fetch-container">
            { (isLoading) ?
                <><div className="loader"/><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi neque aut modi, ducimus exercitationem perferendis non! Sed autem accusamus tempore!</p><a className="button" onClick={onRetry}>Retry</a></>
                : <div>{error} <button onClick={onRetry}>Retry</button> </div>
            }
        </div>
    )
}
