import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CountUp from 'react-countup';
import './Home.css'
import useFullLoader from "../Loader/UseFullLoader";
function CountBar() {
    var [uniname, setUniname] = useState([]);
    const [loader, showLoader, hideLoader] = useFullLoader();
    useEffect(() => {
        getdata();
        document.title = "Home";
    },[])
    const localData = JSON.parse(localStorage.getItem('books'));
    const getdata = async () => {
        showLoader();
        const response = await axios.get(
            'http://universities.hipolabs.com/search?country=India'
        );
        hideLoader();
        console.log(response);
        setUniname(response.data);
    } 
    return (
        <>
            <div>{loader}</div>
            <div className="dis">
            <div className="ad">
            <p className="cen">Number of Universities</p>
            <span className="num"><CountUp start={200} end={uniname.length/2}></CountUp></span>
            </div>
            <div className="uni">
            <p className="cen">Number of Admissions</p>
            <span className="num"><CountUp end={localData.length} duration={7}></CountUp></span>
            </div>
            </div> 
        </>
    );

}

export default CountBar;