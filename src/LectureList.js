import './Styles.css';
import django from './img/django.jpeg';
import java from './img/java2.png';
import spring from './img/spring.png';
import c from './img/C_image.png';
import python from './img/python.png';
import react from './img/react.png';

/* eslint-disable */
// 파일 내용

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
                                <img className="img_css" src={django} alt="" />
                                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                    <h2 className="fs-4 fw-bold">Django</h2>
                                    <div className="mb-0">
                                        <p className="fw-bold"> Python 기반 웹 프레임워크</p>
                                        <p>
                                            Django로 개발된 인기 있는 웹사이트 <br /> : Instagram, Disqus, 번개장터,
                                            위시켓
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a onClick={onclick2} className="col-lg-6 col-xxl-4 mb-5">
                            <div>
                                <div className="card bg-light border-0 h-100">
                                    <img className="img_css" src={react} alt="" />
                                    <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                        <h2 className="fs-4 fw-bold">React</h2>
                                        <div className="mb-0">
                                            <p className="fw-bold"> JavaScript 오픈 소스 라이브러리</p>
                                            <p>
                                                React로 개발된 인기 있는 웹사이트 <br /> : Facebook, Airbnb, Netflix
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a onClick={onclick3} className="col-lg-6 col-xxl-4 mb-5">
                            <div className="card bg-light border-0 h-100">
                                <img className="img_css" src={spring} alt="" />
                                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                    <h2 className="fs-4 fw-bold">Spring</h2>
                                    <div className="mb-0">
                                        <p className="fw-bold"> Java/Kotlin 기반의 웹 프레임워크</p>
                                        <p>
                                            spring으로 개발된 인기 있는 웹싸이트 <br /> : Ticketmaster, Sky, Zalando
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a onClick={onclick4} className="col-lg-6 col-xxl-4 mb-5">
                            <div className="card bg-light border-0 h-100">
                                <img className="img_css" src={c} alt="" />
                                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                    <h2 className="fs-4 fw-bold">C programming language</h2>
                                    <div className="mb-0">
                                        <p className="fw-bold">
                                            세계적으로 많이 쓰이는
                                            <br /> 프로그래밍 언어 중 하나
                                        </p>
                                        <p>사용 분야 : 운영체제, 임베디드 시스템, 마이크로컨트롤러, 데이터베이스</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a onClick={onclick5} className="col-lg-6 col-xxl-4 mb-5">
                            <div className="card bg-light border-0 h-100">
                                <img className="img_css" src={python} alt="" />
                                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                    <h2 className="fs-4 fw-bold">Python</h2>
                                    <div className="mb-0">
                                        <p className="fw-bold">
                                            강력한 라이브러리를 가지고 있는
                                            <br /> 인터프리터 방식의 프로그래밍 언어
                                        </p>
                                        <p> 사용 분야 : 웹 개발, 데이터 분석, 머신러닝, 인공지능 개발, 게임 개발</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a onClick={onclick6} className="col-lg-6 col-xxl-4 mb-5">
                            <div className="card bg-light border-0 h-100">
                                <img className="img_css" src={java} alt="" />
                                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                    <h2 className="fs-4 fw-bold">Java</h2>
                                    <div className="mb-0">
                                        <p className="fw-bold">
                                            가장 많이 사용하는 <br />
                                            객체지향 프로그래밍 언어
                                        </p>
                                        <p>
                                            사용 분야 : 웹 개발, 데이터베이스 처리, 빅 데이터 및 분산 처리, 시스템
                                            프로그래밍
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
/* eslint-enable */
export default LectureList;
