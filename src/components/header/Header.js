import profile from './profile_picture.jfif';
import ageCalculating from '../../usefulFunctions';
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
                        <p className="personal-profile__work">Software developer (Frontend & Backend)</p>
                        <div className="personal-profile__contacts">
                            <dl className="contact-list contact-list__opacity-titles">
                                <dt>Age:</dt>
                                <dd>{ageCalculating}</dd>
                                <dt>Phone:</dt>
                                <dd><a href="tel:4382277888">438-227-7888</a></dd>
                                <dt>Email:</dt>
                                <dd><a href="mailto:tminhthong1999@gmail.com">tminhthong1999@gmail.com</a></dd>
                                <dt>Address:</dt>
                                <dd>7760 Ave Naples, Brossard, Quebec, Canada</dd>
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
