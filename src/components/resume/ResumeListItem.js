function ResumeListItem({company, period, description}) {
    return (
        <div className="resume-list__block">
            <p className="resume-list__block-title">{company}</p>
            <p className="resume-list__block-date">{period}</p>
            <p>
                {description}
            </p>
        </div>
    );
}
export default ResumeListItem;
