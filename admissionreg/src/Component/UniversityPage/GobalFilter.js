import React from 'react'
import './Table.css'
export const GobalFilter = ({filter , setFilter , preGlobalFilteredRows}) => {
    const count = preGlobalFilteredRows.length
    return (
        <span>
            <input className="search" type="search" value={filter || ''} onChange={e => setFilter(e.target.value)} placeholder={`${count} records to search`} 
         />
        </span>
    )
}
