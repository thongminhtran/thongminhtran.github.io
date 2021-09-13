import project1 from './project1.PNG';
import project2 from './project2.PNG';
import project3 from './project3.PNG';
import ProjectItem from "./ProjectItem";
function Project() {
    const projects = [
        {
            image: project1,
            title: 'My portfolio built by ReactJS, HTML5, CSS3',
            description: 'My own resume built by ReactJS, HTML5 and CSS3. The source code built by ReactJS, I uploaded under my github.',
            stacks: [
                'html5',
                'css3',
                'javascript',
                'react',
                'github pages',
                'github',
                'webstorm IDE'
            ],
            link: 'https://github.com/thongminhtran/thongminhtran.github.io'
        },
        {
            image: project2,
            title: 'Darchi System website',
            description: 'I developed the website using WordPress 5.4, Wordpress plugin, Elementor pro theme builder when I was working at Vanntechs Web Studio, Montreal Quebec. The hosting server is SiteGround.',
            stacks: [
                'html5',
                'css3',
                'wordpress',
                'php7',
                'siteground'
            ],
            link: 'https://darchisystems.com/'
        },
        {
            image: project3,
            title: 'Huong Xua Anjour - restaurant in Montreal, Quebec Canada',
            description: 'I collected requirements and developed the website using WordPress 5.4, WordPress plugins, Elementor pro theme builder and customized CSS files on my own, when I was working at Vanntechs Web Studio, Montreal Quebec. The hosting server is SiteGround.',
            stacks: [
                'html5',
                'css3',
                'wordpress',
                'php7',
                'siteground',
                'communication'
            ],
            link: 'https://huongxua-anjou.com/fr_ca/'
        }
    ];
    return (
        <section id="portfolio" className="container section">
            <div className="row">
                <div className="col-md-12">
                    <h2 id="portfolio_header" className="section__title">My projects_</h2>
                </div>
            </div>
            <div className="portfolio-cards">
                {projects.map(function(project, index){
                    return <ProjectItem title={project.title} image={project.image} description={project.description} link={project.link}/>
                })}
            </div>
        </section>
    );
}
export default Project;
