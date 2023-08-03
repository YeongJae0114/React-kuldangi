import LectureItem from './LectureItem';
import './Styles.css';

const LectureDetailList = ({Lecture_list, num}) => {
    
    const filteredLectureList = Lecture_list.filter((it) => parseInt(it.field) === num);
    console.log(Lecture_list)
    return (
        <div>
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {
                        filteredLectureList.map((it) => (
                            
                            <LectureItem key={it.id} {...it} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LectureDetailList;
