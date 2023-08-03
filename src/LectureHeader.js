import './Styles.css';

const LectureHeader = ({isEdit, changepage}) => {
    return (
        <div>
            <header className="py-5">
                <div className="container px-lg-5">
                    <div className="p-4 p-lg-5 bg-light rounded-3 text-center">
                        <div className="m-4 m-lg-5">
                            <h1 className="display-5 fw-bold">A warm welcome!</h1>
                            <p className="fs-4">
                                Bootstrap utility classNamees are used to create this jumbotron since the old component
                                has been removed from the framework. Why create custom CSS when you can use utilities?
                            </p>
                            <a className="btn btn-primary btn-lg" onClick={()=>{changepage(isEdit=true)}}>
                                Home
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default LectureHeader;