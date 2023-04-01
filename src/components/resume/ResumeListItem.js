function ResumeListItem({company, period, description, link}) {
    return (
        <div className="resume-list__block">
            <p className="resume-list__block-title">
                <a href={link} target={"_blank"}>{company}</a>
            </p>
            <p className="resume-list__block-date">{period}</p>
            <p>
                {description}
            </p>
        </div>
    );
}
export default ResumeListItem;
