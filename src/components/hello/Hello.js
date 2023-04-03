import icon from './img_btn_icon.png';
function Hello() {
    return (
        <section id="hello" className="container section">
            <div className="row">
                <div className="col-md-10">
                    <h2 id="hello_header" className="section__title">Hi, this website is developed by React (Javascript)_</h2>
                    <p className="section__description">
                        I am a fourth-year student in CS from Concordia University (Montreal, Quebec Canada)
                        with an interest in the foundation of programming and algorithm.

                        I have experience in Java 8 and 11, Javascript with React. I also know a bit of Angular (10) with Typescript. As you can see, this portfolio is developed by using React (Javascript) and thanks to Github pages, I can host it for free.
                        <br/>

                        I also enjoy working in PHP 7 and WordPress 4 and above, to develop professional websites, integrating some WordPress and WooCommerce plugins, together with MySQL, CSS3, HTML5, and Javascript. Sometimes I make some fun with Linux commands.
                    </p>
                    <a href="https://github.com/thongminhtran/thongminhtran.github.io/blob/master/public/ThongMinhTran-Resume-ComputerScience-ConcordiaUniversity-InternalBoard-1.pdf" target={"_blank"} className="section_btn site-btn"><img src={icon} alt=""/>Download CV</a>
                </div>
            </div>
        </section>
    );
}
export default Hello;
