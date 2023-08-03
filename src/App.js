import './App.css';
import LectureHeader from './LectureHeader';
import LectureList from './LectureList';
import Navogationbar from './Navigationbar';
import Footer from './Footer';
import LectureDetailList from './LectureDetailList';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [isEdit, setisEdit] = useState(true);
    const [num, setnum] = useState(1);
    const [data, setdata] = useState([]);

    const getData = async () => {
        try {
            const response = await axios.get('http://223.130.134.164:8000/Post/');
            const res = response.data;

            const initData = res.slice(0, 50).map((it) => {
                return {
                    id: it.id,
                    lecture_name : it.lecture_name,
                    lecture_img : it.lecture_img,
                    teacher : it.teacher,
                    lecture_url : it.lecture_url,
                    price : it.price,
                    platform : it.platform,
                    field : it.field
                };
            });

            setdata(initData);
        } catch (error) {
            // Handle any error that occurred during the fetch
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const changepage = (tmp) => {
        setisEdit(tmp);
    };

    const area =(num)=>{
        setnum(num)
        console.log(num)
    }
    return (
        <div>
            <Navogationbar isEdit={isEdit} changepage={changepage}></Navogationbar>
            <LectureHeader isEdit={isEdit} changepage={changepage}></LectureHeader>
            {isEdit ? (
                <LectureList isEdit={isEdit} changepage={changepage} area={area} num={num}></LectureList>
            ) : (
                <LectureDetailList isEdit={isEdit} Lecture_list={data} num={num}></LectureDetailList>
            )}

            <Footer></Footer>
        </div>
    );
}

export default App;
