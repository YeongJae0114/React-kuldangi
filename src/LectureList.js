import './Styles.css';
import django from './img/django.jpeg';
import java from './img/java.png';
import spring from './img/spring.png';
import c from './img/C.png';
import python from './img/python.png';
import react_img from './img/react.png';

const LectureList = ({ isEdit, changepage , area, num}) => {

    const onclick = () => {
        changepage(!isEdit)
        area()
    }
    const onclick1 = () => {
        changepage(!isEdit)
        num=1
        area(num)
    }
    const onclick2 = () => {
        changepage(!isEdit)
        num=2
        area(num)
    }
    const onclick3 = () => {
        changepage(!isEdit)
        num=3
        area(num)
    }
    const onclick4 = () => {
        changepage(!isEdit)
        num=4
        area(num)
    }
    const onclick5 = () => {
        changepage(!isEdit)
        num=5
        area(num)
    }
    const onclick6 = () => {
        changepage(!isEdit)
        num=6
        area(num)
    }
    


    return (
            <div>
                <section class="pt-4">
                    <div class="container px-lg-5">
                        <div class="row gx-lg-5">
                            <a onClick={onclick1} class="col-lg-6 col-xxl-4 mb-5">
                                <div class="card bg-light border-0 h-100">
                                    <img src={django} alt="" />
                                    <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                        <h2 class="fs-4 fw-bold">Fresh new layout</h2>
                                        <p class="mb-0">
                                            With Bootstrap 5, we've created a fresh new layout for this template!
                                        </p>
                                    </div>
                                </div>
                            </a>
                            <a onClick={onclick2} class="col-lg-6 col-xxl-4 mb-5">
                                <div>
                                    <div class="card bg-light border-0 h-100">
                                        <img src={react_img} alt="" />
                                        <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                            <h2 class="fs-4 fw-bold">Free to download</h2>
                                            <p class="mb-0">
                                                As always, Start Bootstrap has a powerful collectin of free templates.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <a onClick={onclick3} class="col-lg-6 col-xxl-4 mb-5">
                                <div class="card bg-light border-0 h-100">
                                    <img src={spring} alt="" />
                                    <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                        <h2 class="fs-4 fw-bold">Jumbotron hero header</h2>
                                        <p class="mb-0">The heroic part of this template is the jumbotron hero header!</p>
                                    </div>
                                </div>
                            </a>
                            <a onClick={onclick4} class="col-lg-6 col-xxl-4 mb-5">
                                <div class="card bg-light border-0 h-100">
                                    <img src={c} alt="" />
                                    <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                        <h2 class="fs-4 fw-bold">Feature boxes</h2>
                                        <p class="mb-0">We've created some custom feature boxes using Bootstrap icons!</p>
                                    </div>
                                </div>
                            </a>
                            <a onClick={onclick5} class="col-lg-6 col-xxl-4 mb-5">
                                <div class="card bg-light border-0 h-100">
                                    <img src={python} alt="" />
                                    <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                        <h2 class="fs-4 fw-bold">Simple clean code</h2>
                                        <p class="mb-0">
                                            We keep our dependencies up to date and squash bugs as they come!
                                        </p>
                                    </div>
                                </div>
                            </a>
                            <a onClick={onclick6} class="col-lg-6 col-xxl-4 mb-5">
                                <div>
                                    <div class="card bg-light border-0 h-100">
                                        <img src={java} alt="" />
                                        <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                            <h2 class="fs-4 fw-bold">A name you trust</h2>
                                            <p class="mb-0">
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
