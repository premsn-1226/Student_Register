import React,{ useState, useEffect} from 'react'
import axios from 'axios'
export const ColumnFilter = ({ column }) => {
    const {filterValue, setFilter} = column
    const [uniname, setUniname] = useState([]);
  useEffect(() => {
      getdata();
  },[])

  const getdata = async () => {
      const response = await axios.get(
          'http://universities.hipolabs.com/search?country=India'
      );
      setUniname(response.data);
  }

  function search(rows){
      return rows.filter((row) => row['state-province'] === null ? '' : toString().toLowerCase().indexOf() > -1)
  }


  var UniversityName = search(uniname); 
  UniversityName = UniversityName.reduce((unique, o) => {
    if(!unique.some(obj => obj['name'] === o['name'])) {
      unique.push(o);
    }
    return unique;
},[]);
 function optionUniversity(){ 
  return UniversityName.map((uni,index) => <option className="sort" key={index}>{uni['name']}</option>
 )};
    return (
        <span>
        <select className="filters" value={filterValue || ''} name="University" onChange={e => setFilter(e.target.value)} placeholder="Select state"><option>{''}</option>{optionUniversity()}</select>
        </span>
    )
}
