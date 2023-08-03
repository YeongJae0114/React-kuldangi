import './Styles.css';

const LectureItem = ({ lecture_name, lecture_img, teacher, lecture_url, price, platform }) => {
    const price1 = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    return (
        <div class="col mb-5">
            <div class="card h-100">
                <img class="card-img-top" src={lecture_img} alt="..." />

                <div class="card-body p-4">
                    <div class="text-center">
                        <h5 class="fw-bolder">{lecture_name}</h5>
                        {price1} 원
                    </div>
                </div>

                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center">
                        <a class="btn btn-outline-dark mt-auto" href={lecture_url}>
                            강의 보러가기
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LectureItem;
