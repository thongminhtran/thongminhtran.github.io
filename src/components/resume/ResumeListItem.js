import React from "react";

function ResumeListItem({company, position, period, description, link}) {
    return (
        <div className="resume-list__block">
            <div className="resume-list__block-header">
                <p className="resume-list__block-title">
                    <a href={link} target="_blank" rel="noopener noreferrer">{company}</a>
                </p>
                <p className="resume-list__block-date">{period}</p>
            </div>
            <p className="resume-list__block-position">{position}</p>
            <div className="resume-list__block-description">
                <ul>
                    {description.split('\n').map((line, index) => (
                        <li key={index}>{line}</li>
                    ))}
                </ul>
            </div>
        </div>

    );
}
export default ResumeListItem;
