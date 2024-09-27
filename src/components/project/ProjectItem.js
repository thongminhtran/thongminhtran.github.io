function ProjectItem({image, title, description, link, stacks}) {
    return (
        <div className="row project-card">
            <div className="col-md-6 col-lg-5 project-card__img">
                <img className="" src={image} alt="project-img"/>
            </div>
            <div className="col-md-6 col-lg-7 project-card__info">
                <h3 className="project-card__title">{title}</h3>
                <p className="project-card__description">
                    {description}
                </p>
                <p className="project-card__stack">Used stack:</p>
                <ul className="tags">
                    {stacks.map((stack, index) => (
                        <li key={index}>{stack}</li>
                    ))}
                </ul>
                <a href={link} className="project-card__link">{link}</a>
            </div>
        </div>
    );
}

export default ProjectItem;
