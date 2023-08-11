import './Styles.css';
import django from './img/django.jpeg';
import java from './img/java.png';
import spring from './img/spring.png';
import c from './img/C_image.png';
import python from './img/python.png';
import react_img from './img/react.png';

const LectureList = ({ isEdit, changepage, area, num }) => {
    const onclick1 = () => {
        changepage(!isEdit);
        num = 1;
        area(num);
    };
    const onclick2 = () => {
        changepage(!isEdit);
        num = 2;
        area(num);
    };
    const onclick3 = () => {
        changepage(!isEdit);
        num = 3;
        area(num);
    };
    const onclick4 = () => {
        changepage(!isEdit);
        num = 4;
        area(num);
    };
    const onclick5 = () => {
        changepage(!isEdit);
        num = 5;
        area(num);
    };
    const onclick6 = () => {
        changepage(!isEdit);
        num = 6;
        area(num);
    };

    return (
        <div>
            <section className="pt-4">
                <div className="container px-lg-5">
                    <div className="row gx-lg-5">
                        <a onClick={onclick1} className="col-lg-6 col-xxl-4 mb-5">
                            <div className="card bg-light border-0 h-100">
                                <img src={django} alt="" />
                                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                    <h2 className="fs-4 fw-bold">Django</h2>
                                    <p className="mb-0">
                                    Python 기반 웹 프레임워크 <br/>Django로 개발된 인기 있는 웹사이트 : Instagram, Disqus, 번개장터, 위시켓
                                    </p>
                                </div>
                            </div>
                        </a>
                        <a onClick={onclick2} className="col-lg-6 col-xxl-4 mb-5">
                            <div>
                                <div className="card bg-light border-0 h-100">
                                    <img src={react_img} alt="" />
                                    <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                        <h2 className="fs-4 fw-bold">React</h2>
                                        <p className="mb-0">
                                        JavaScript 오픈 소스 라이브러리<br/>React로 개발된 인기 있는 웹사이트 : Facebook, Airbnb, Netflix
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a onClick={onclick3} className="col-lg-6 col-xxl-4 mb-5">
                            <div className="card bg-light border-0 h-100">
                                <img src={spring} alt="" />
                                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                    <h2 className="fs-4 fw-bold">Spring</h2>
                                    <p className="mb-0">Java/Kotlin 기반의 웹 프레임워크<br />spring으로 개발된 인기 있는 웹싸이트 : Ticketmaster, Sky, Zalando</p>
                                </div>
                            </div>
                        </a>
                        <a onClick={onclick4} className="col-lg-6 col-xxl-4 mb-5">
                            <div className="card bg-light border-0 h-100">
                                <img src={c} alt="" />
                                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                    <h2 className="fs-4 fw-bold">Feature boxes</h2>
                                    <p className="mb-0">We've created some custom feature boxes using Bootstrap icons!</p>
                                </div>
                            </div>
                        </a>
                        <a onClick={onclick5} className="col-lg-6 col-xxl-4 mb-5">
                            <div className="card bg-light border-0 h-100">
                                <img src={python} alt="" />
                                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                    <h2 className="fs-4 fw-bold">Simple clean code</h2>
                                    <p className="mb-0">
                                        We keep our dependencies up to date and squash bugs as they come!
                                    </p>
                                </div>
                            </div>
                        </a>
                        <a onClick={onclick6} className="col-lg-6 col-xxl-4 mb-5">
                            <div>
                                <div className="card bg-light border-0 h-100">
                                    <img src={java} alt="" />
                                    <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                        <h2 className="fs-4 fw-bold">A name you trust</h2>
                                        <p className="mb-0">
                                            Start Bootstrap has been the leader in free Bootstrap templates since 2013!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LectureList;
