import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Table.css'
import useFullLoader from "../Loader/UseFullLoader";
import { PaginationTable } from '../UniversityPage/PaginationTable';
function Table() {
    var [uniname, setUniname] = useState([]);
    const [loader, showLoader, hideLoader] = useFullLoader();
    useEffect(() => {
        getdata();
        document.title = "University";
    },[])

    const getdata = async () => {
        showLoader();
        const response = await axios.get(
            'http://universities.hipolabs.com/search?country=India'
        );
        hideLoader();
        setUniname(response.data);
    } 
  uniname = uniname.reduce((unique, o) => {
    if(!unique.some(obj => obj['name'] === o['name'])) {
      unique.push(o);
    }
    return unique;
},[]);

    return (
        <div>
            <PaginationTable datas={uniname}></PaginationTable>
            <div>{loader}</div>
        </div>
    );

}

export default Table