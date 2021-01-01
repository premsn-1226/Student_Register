import React from 'react'

export const ColumnFilter = ({ column }) => {
    const {filterValue, setFilter} = column
    return (
        <span>
            <input className="filter" type="text" value={filterValue || ''} onChange={e => setFilter(e.target.value)} placeholder="filter state" />
        </span>
    )
}
