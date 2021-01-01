import React, { useContext, useState , useEffect} from 'react';
import ReactDOM from 'react-dom'
import { RegContext } from './RegContext';
import './Table.css'
import axios from 'axios'
import useFullLoader from "../Loader/UseFullLoader";
const modalRoot = document.getElementById('modal-root')
function Update({onClose , books}){  
  console.log(books.id)
  const { dispatch } = useContext(RegContext);
  const [name, setName] = useState(books.name);
  const [cutoff, setCutoff] = useState(books.cutoff);
  const [state, setState] = useState(books.state);
  const [address, setAddress] = useState(books.address);
  const [university, setUniversity] = useState(books.university);
  const [uniname, setUniname] = useState([]);
  const [loader, showLoader, hideLoader] = useFullLoader();
  const id = books.id;
  useEffect(() => {
      getdata();
  },[])
  const getdata = async () => {
    showLoader();
      const response = await axios.get(
          'http://universities.hipolabs.com/search?country=India'
      );
      hideLoader();
      setUniname(response.data);
  }

  function search(rows){
      return rows.filter((row) => row['state-province'] === null ? '' : toString().toLowerCase().indexOf() > -1)
  }
  var data = search(uniname);
  data = data.reduce((unique, o) => {
    if(!unique.some(obj => obj['state-province'] === o['state-province'])) {
      unique.push(o);
    }
    return unique;
  },[]);
let optionState = data.map(state => <option>{state['state-province']}</option>);
var UniversityName = search(uniname); 
  UniversityName = UniversityName.reduce((unique, o) => {
    if(!unique.some(obj => obj['name'] === o['name'])) {
      unique.push(o);
    }
    return unique;
},[]);
function optionUniversity(state){ 
   console.log(state)
  return UniversityName.map((uni) => state === uni['state-province'] ? <option>{uni['name']}</option> : ''
 )};

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'EDIT_BOOK', book: { name, cutoff, state , address, university , id}});
    onClose()
    alert('𝑼𝑷𝑫𝑨𝑻𝑬𝑫 𝑺𝑼𝑪𝑪𝑬𝑺𝑺𝑭𝑼𝑳𝑳𝒀');
  }

  return ReactDOM.createPortal(
    <div
        style={{
          position: 'fixed',
          top: '0',
          bottom: '0',
          left: '0',
          right: '0',
          display: 'grid',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}>
        <div
          style={{
            padding: 20,
            borderRadius: '10px',
            display: 'block',
            minHeight: '200px',
            margin: '10rem',
            position: 'relative',
            minWidth: '200px',
            justifySelf: 'center',
            transition : '5s',
          }}
        >
      
    <form className="inside" onSubmit={handleSubmit}>
    <div>{loader}</div>
      <legend>UPDATE FORM</legend>
    <label>NAME</label>
      <input className="name" type="text" value={name}
        onChange={(e) => setName(e.target.value.replace(/[^\w\s]/gi, ""))} autoComplete="no" required />   

    <label>CUT-OFF</label>
      <input className="cutoff" type="number"  value={cutoff}
      onChange={(e) => setCutoff(e.target.value)} min={100} max={200} autoComplete="no" required />
    
    <label>STATE</label>
      <select value={state} className="state" onChange={(e) => setState(e.target.value)} name="state" required><option>{''}</option>{optionState}</select>      
    
    <label>UNIVERSITY</label>
        <select value={university} className="university" onChange={(e) => setUniversity(e.target.value)} name="University"><option>{''}</option>{optionUniversity(state)}</select>
      <label>ADDRESS</label>
      <textarea type="text" className="address"  value={address}
      onChange={(e) => setAddress(e.target.value)} autoComplete="no" maxLength='70' required />        
    <input type="submit" value="UPDATE" />
    <button className="close" onClick={onClose}>CLOSE</button>
    </form>
    </div>
    </div>,modalRoot
  );
}
 
export default Update;