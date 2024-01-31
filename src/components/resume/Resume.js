import EducationItem from "./EducationItem";
import ResumeListItem from "./ResumeListItem";
import ProgressListItem from "./ProgressListItem";
function Resume() {
    const employmentItems = [
        {
            company: "Bombardier Aerospace",
            position: "Software Developer Intern",
            period: "January 2023 - Present",
            link: "https://bombardier.com/en",
            description: "Collaborated on the Predictive Maintenance project, developed and optimized user interfaces using React, JavaScript (ES6+), CSS, Redux, HTML5, and GraphQL.\n" +
                "Coordinated with design and backend teams to integrate UI enhancements and RESTful APIs, built on Node.js, enhancing application performance and user engagement.\n" +
                "Developed features using Mapbox GL, Sketch, and Figma for displaying a global map, which included real-time tracking of aircraft, showcasing flight times, and arrival and departure times.\n" +
                "Authored and maintained over 100 unit tests using React Testing Library and Jest, achieving a 95% coverage rate, and significantly enhancing the reliability of React components."
        },
        {
            company: "CGI Canada",
            position: "Full Stack Developer Intern",
            period: "January 2022 - May 2022",
            link: "https://www.cgi.com/canada/en-ca",
            description: "Spearheaded the development of a front-end application for VIA Rail Canada in Angular 10 and TypeScript, enhancing booking management efficiency by 40%.\n" +
                "Deployed features at VIA Rail Canada website, optimizing infrastructure with Docker to improve coordination and scalability.\n" +
                "Engineered advanced features and algorithms in Java, applying object-oriented programming principles and industry best practices.\n" +
                "Engaged in Agile development cycles; led sprint planning, participated in daily stand-ups, and managed tasks using JIRA, taking on and resolving complex bugs."
        },
        {
            company: "C.H. Robinson",
            position: "Data Analyst Intern",
            period: "May 2021 - present",
            link: "https://www.chrobinson.com/en-us/",
            description: "Facilitated communication between support staff, clients, and Canada customs release staff, streamlining the documentation process.\n" +
                "Collaborated with IT teams and operational staff to gather and document business requirements, leading to workflow improvements.\n" +
                "Developed proficiency in internal systems, including Datacap, IRS3, NCC, and Navisphere. Utilized SQL for data extraction, enhancing system utilization and operational efficiency.\n" +
                "Utilized SQL for data extraction, enhancing system utilization and operational efficiency.",
        },
        {
            company: "Vanntechs Web Studio",
            position: "WordPress Developer Intern",
            period: "May 2020 - April 2021",
            link: "https://vanntechs.com/",
            description: "Gained expertise in WordPress and WooCommerce, successfully completing 4 website projects, including darchisystems.com and huongxua-anjou.com.\n" +
                "Functioned as a business analyst, facilitating communication between clients and an international outsourced team in India, Philippines, and Dominican Republic.\n"+
            "Managed project timelines and maintained updates on the company's and clients' Trello boards. Utilized Bitrix24 CRM software for efficient tracking of client communications and emails."
        }
    ];
    const skillItems = [
        {
            skillName: 'HTML5, CSS3',
            percentage: '70'
        },
        {
            skillName: 'Javascript',
            percentage: '70'
        },
        {
            skillName: 'React',
            percentage: '90'
        },
        {
            skillName: 'Angular',
            percentage: '60'
        },
        {
            skillName: 'Java',
            percentage: '80'
        },

        {
            skillName: 'GIT',
            percentage: '70'
        },
        {
            skillName: 'Microsoft Offices 365',
            percentage: '90'
        },
        {
            skillName: 'IntelliJ IDE',
            percentage: '70'
        },
        {
            skillName: 'Webstorm IDE',
            percentage: '70'
        },
        {
            skillName: 'JIRA',
            percentage: '90'
        },
        {
            skillName: 'CRM (Bitrix 24)',
            percentage: '80'
        },
        {
            skillName: 'WordPress',
            percentage: '80'
        }
    ];
    return (
        <section id="resume" className="container section">
            <div className="row">
                <div className="col-md-10">
                    <h2 id="resume_header" className="section__title">Resume_</h2>
                    <p className="section__description">
                        I'm a fourth year student of Computer Science, in Concordia University, Montreal, Quebec. I'm a passionate, honest, attention detailed and creative person. I am actively
                        looking for a full-time position this Summer 2024. Below is my working experiences in Montreal, Quebec, Canada.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8 section__resume resume-list">
                    <h3 className="resume-list_title">education</h3>
                    <EducationItem/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8 section__resume resume-list">
                    <h3 className="resume-list_title">employment</h3>
                    {employmentItems.map(function(employmentItem, index) {
                        return <ResumeListItem company={employmentItem.company} position={employmentItem.position} description={employmentItem.description} period={employmentItem.period} link={employmentItem.link} key={index}/>
                    })}
                </div>
            </div>
            <div className="row section__resume progress-list js-progress-list">
                <div className="col-md-12">
                    <h3 className="progress-list__title">general skills</h3>
                </div>
                <div className="col-md-12 mr-auto">
                    {skillItems.map(function(skillItem, index){
                        return <ProgressListItem skillName={skillItem.skillName} percentage={skillItem.percentage}/>
                    })}
                </div>
            </div>
        </section>
    );
}

export default Resume;
