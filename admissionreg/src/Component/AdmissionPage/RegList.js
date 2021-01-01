import React, { useContext } from 'react';
import RegDetails from './RegDetails';
import { RegContext } from './RegContext';

const RegList = () => {
  const { books } = useContext(RegContext);
  return books.length ? (
    <div className="book-list">
        <RegDetails book={books} />
    </div>
  ) : (
    <div className="empty">NO RECORDS TO DISPLAY</div>
  );
  }

export default RegList;
