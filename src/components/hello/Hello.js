import icon from './img_btn_icon.png';

function Hello() {
    return (
        <section id="hello" className="container section">
            <div className="row">
                <div className="col-md-10">
                    <h2 id="hello_header" className="section__title">Hi, this website is developed by React
                        (Javascript)_</h2>
                    <p className="section__description">
                        I am a recent Computer Science graduate from Concordia University with expertise in JavaScript
                        (ES6+), React, Material-UI (MUI), and TypeScript for building front-end applications.
                        I also have experience with Angular and Python, so I can handle both front-end and
                        back-end development. This portfolio is built with React and hosted on GitHub Pages for free.
                        <br/> <br/>
                        On the back-end, I work with Node.js and Express.js to create scalable applications and RESTful
                        APIs, using HTTP methods like GET, POST, PUT, and DELETE. I have knowledge with both SQL
                        (PostgreSQL,
                        MySQL) and NoSQL (MongoDB) databases.
                    </p>
                    <a href="/Tim_Tran_Frontend_Developer_Resume.pdf" download className="section_btn site-btn"><img
                        src={icon} alt=""/>Download CV</a>
                </div>
            </div>
        </section>
    );
}

export default Hello;
