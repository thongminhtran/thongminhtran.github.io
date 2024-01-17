import React, { useState, useEffect, useRef } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

function ProgressListItem({skillName, percentage}) {
    const [isVisible, setIsVisible] = useState(false);
    const progressBarRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            });
        });

        observer.observe(progressBarRef.current);

        return () => {
            if (progressBarRef.current) {
                observer.unobserve(progressBarRef.current);
            }
        };
    }, []);
    const progressBarStyle = isVisible ?
        {
            width: `${percentage}%`,
            backgroundColor: 'rgb(191, 191, 191)' // Example: less bold blue with some transparency
            // You can adjust the RGBA values as needed
        }
        : { width: '0%' };
    return (
        <div className="progress-list__skill" ref={progressBarRef}>
            <p>
                <span className="progress-list__skill-title">{skillName}</span>
                <span className="progress-list__skill-value">{`${percentage}%`}</span>
            </p>
            <div className="progress">
                <div className ="progress-bar" role="progressbar" aria-valuenow={percentage} aria-valuemin="0"
                     style={progressBarStyle}
                     aria-valuemax="100">
                </div>
            </div>
        </div>
    )
}
export default ProgressListItem;
