import imageBackground from './img_bg_main.jpg';
function Contact() {
    const currentYear  = new Date().getFullYear();
    return (
        <div className="background" style={{ backgroundImage: `url(${imageBackground})` }}>
            <div id="contact" className="container section">
                <div className="row">
                    <div className="col-md-12">
                        <p id="contacts_header" className="section__title">Get in touch_</p>
                    </div>
                </div>
                <div className="row contacts">
                    <div className="col-md-5 col-lg-4">
                        <div className="contacts__list">
                            <dl className="contact-list">
                                <dt>Phone:</dt>
                                <dd><a href="tel:4382277888">438 227 7888</a></dd>
                                <dt>Email:</dt>
                                <dd><a href="mailto:tminhthong1999@gmail.com">tminhthong1999@gmail.com</a></dd>
                            </dl>
                        </div>
                        <div className="contacts__social">
                            <ul>
                                <li><a href="https://www.linkedin.com/in/thongminhtran/">Linkedin</a></li>
                                <li><a href="https://github.com/thongminhtran">GitHub</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-7 col-lg-5">
                    </div>
                </div>
                <div className="footer">
                    <p>© {currentYear} Thong Minh Tran. All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
}
export default Contact;
