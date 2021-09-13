import profile from './profile.jfif';

function Header() {
    return (
        <header className="main-header">
            <div className="container">
                <div className="row personal-profile">
                    <div className="col-md-4 personal-profile__avatar">
                        <img className="" src={profile} alt="avatar"/>
                    </div>
                    <div className="col-md-8">
                        <p className="personal-profile__name">Thong Minh Tran_</p>
                        <p className="personal-profile__work">Software developer(Frontend & Backend)</p>
                        <div className="personal-profile__contacts">
                            <dl className="contact-list contact-list__opacity-titles">
                                <dt>Age:</dt>
                                <dd>21</dd>
                                <dt>Phone:</dt>
                                <dd><a href="tel:4382277888">438 227 7888</a></dd>
                                <dt>Email:</dt>
                                <dd><a href="mailto:thong.tranminh@mail.concordia.ca">thong.tranminh@mail.concordia.ca</a></dd>
                                <dt>Address:</dt>
                                <dd>1309 Victoria Avenue, Saint-Lambert, Quebec Canada</dd>
                            </dl>
                        </div>
                        <p className="personal-profile__social">
                            <a href="https://github.com/thongminhtran" target="_blank"><i className="fa fa-github"></i></a>
                            <a href="https://www.linkedin.com/in/thongminhtran/" target="_blank"><i className="fa fa-linkedin-square"></i></a>
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
}
export default Header;