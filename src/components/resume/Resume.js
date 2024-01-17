import EducationItem from "./EducationItem";
import ResumeListItem from "./ResumeListItem";
import ProgressListItem from "./ProgressListItem";
function Resume() {
    const employmentItems = [
        {
            company: "Bombardier Aerospace - Front React Developer Intern",
            period: "January 2023 - Present",
            link: "https://bombardier.com/en",
            description: "Write Unit Test with Enzyme for some React components, " +
                "Doing support tasks such as fixing bugs, building new features and doing UI enhancement for Predict Maintenance project." +
                " Contribute by picking up tasks and attending sprint planning, sprint daily stand-up and sprint demo." +
                "Volunteer to tackle difficult bug fixing."
        },
        {
            company: "CGI Canada - Frontend Angular Developer Intern",
            period: "January 2022 - May 2022",
            link: "https://www.cgi.com/canada/en-ca",
            description: "Develop frontend application to help clients (personal/agent/company) manage their bookings for CGI's client who is VIA Rail Canada. " +
                "who is VIA Rail Canada. The website was deployed on the production in May 2022 at https://www.viarail.ca/en., using Angular 10. " +
                "Develop unit tests with Jest in Angular." + " Contribute by picking up tasks and attending sprint planning, sprint daily standup and sprint demo. " +
                " Volunteer to tackle difficult bug fixing."
        },
        {
            company: "C.H.Robinson , Montreal Quebec Canada",
            period: "May 2021 - present",
            link: "https://www.chrobinson.com/en-us/",
            description: "Accomplished the strong communication and collaboration with support staffs and Canada custom releases staffs, " +
                "by delegating emails and documents every day to individual teams. Worked as a coordinator between documentation team, " +
                "clients and releases staffs." +
                " Collected business requirements by connecting with support staffs and Canada custom release teams and observe operating activities every day, " +
                "documented the requirements so IT team can understand how to improve the current workflow.",
        },
        {
            company: "Vanntechs Web Studio, Montreal Quebec Canada",
            period: "May 2020 - April 2021",
            link: "https://vanntechs.com/",
            description: "Accomplished the deep understanding on WordPress and WooCommerce, with plugins integration by completing 4 WordPress website projects during the time I worked there." +
                "Worked as a business analyst to communicate what clients need and require, with the outsource team located in India, Philippine and Dominican Republic",
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
                        I'm a fourth year student of Computer Science, in Concordia University, Montreal Quebec. I'm a passionate, honest, attention detailed and creative person. I am actively
                        looking for a full-time position this Summer 2024. Below is my working experiences in Montreal, Quebec Canada.
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
                        return <ResumeListItem company={employmentItem.company} description={employmentItem.description} period={employmentItem.period} link={employmentItem.link} key={index}/>
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
