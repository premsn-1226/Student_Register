import React, { useState , useContext} from 'react';
import { RegContext } from './RegContext';
import Update from './Update';

function Button({books}){
  const { dispatch } = useContext(RegContext);
    const[modal,setShowModal] = useState(false);
    const handleShowMessageClick = () => setShowModal(true)
    const handleCloseModal = () => setShowModal(false)
  
      return (
        <div>
            <button className="edit tooltip" onClick={handleShowMessageClick}><span className="tooltiptext">Edit</span><i className="fa fa-pencil" aria-hidden="true"></i></button>
            {modal ? (<Update onClose={handleCloseModal} books={books.original}></Update>) : null}
            <button className="delete tooltip" onClick={() => dispatch({ type: 'REMOVE_BOOK', id: books.original.id })}><span class="tooltiptext">delete</span><i className="fa fa-minus-circle" aria-hidden="true"></i></button>
        </div>
      )
    }
export default Button