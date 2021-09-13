function ProgressListItem({skillName, percentage}) {
    return (
        <div className="progress-list__skill">
            <p>
                <span className="progress-list__skill-title">{skillName}</span>
                <span className="progress-list__skill-value">{`${percentage}%`}</span>
            </p>
            <div className="progress">
                <div className ="progress-bar" role="progressbar" aria-valuenow={percentage} aria-valuemin="0"
                     aria-valuemax="100">
                </div>
            </div>
        </div>
    )
}
export default ProgressListItem;
