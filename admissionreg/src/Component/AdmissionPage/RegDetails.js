import React, { useMemo } from 'react';
import { useTable , useGlobalFilter , useFilters , usePagination} from 'react-table'
 import { Column } from './Column'
import { GobalFilter } from './GobalFilter'
import './Table.css'
import Button from './Button';
const RegDetails = ({ book }) => {
  
  const columns = useMemo(() => Column,[])
    const data = useMemo(() => book)
    const tableInstance = useTable({
        columns,
        data
    },useFilters,useGlobalFilter,usePagination)

    const{ getTableProps , getTableBodyProps , 
        headerGroups , page , nextPage , preGlobalFilteredRows ,
        previousPage,canPreviousPage,canNextPage, gotoPage, pageCount, pageOptions,
         prepareRow,state,setGlobalFilter,setAllFilters} = tableInstance

    const {globalFilter, pageIndex} = state
    let tree;
    
    return (
        <>  
        <div className="pagination">
            <button className="tooltip" onClick={()=> gotoPage(0)} disabled={!canPreviousPage}><span className="tooltiptext">First</span>{'<<'}</button>
            <button className="tooltip" onClick={()=> previousPage()} disabled={!canPreviousPage}><span className="tooltiptext">Previous</span>❮</button>
<span><strong className="tooltip"><span className="tooltiptext">Current page</span>{pageIndex + 1}</strong> ... {pageOptions.length}{'  '}</span>
            <button className="tooltip" onClick={()=> nextPage()} disabled={!canNextPage}><span className="tooltiptext">Next</span>❯</button>
            <button className="tooltip" onClick={()=> gotoPage(pageCount-1)} disabled={!canNextPage}><span className="tooltiptext">Last</span>{">>"}</button>
            <button className="reset" onClick={() => setAllFilters([])}>Reset Filters</button>
        </div> 


        <GobalFilter filter={globalFilter} setFilter={setGlobalFilter} preGlobalFilteredRows={preGlobalFilteredRows}></GobalFilter>
            <table {...getTableProps()}>
            <thead>
            {
            headerGroups.map(headerGroup=>(
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {/*<th className="rowStyle">SI.No</th>*/}
                    {
                        headerGroup.headers.map(column=>(
                        <th {...column.getHeaderProps()} className="rowStyle">{column.render('Header')}
                        <div>{column.canFilter ? column.render('Filter'): ''}</div>
                        </th>
                        ))
                    }
                    <th className="rowStyle">ACTION</th>
            </tr>
            ))
            }
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    page.length > 0 ?
                    page.map((row,index)=>{
                        prepareRow(row)
                        return(
                            
                        <tr key={index} className="enter" {...row.getRowProps()}>
                           {/* <td>{index+1}</td>*/}
                        {
                            
                             row.cells.map((cell)=>{
                             return (<td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                )
                            })
                        }   
                        <td>
                            <Button books={row}></Button>
                        </td>
                         </tr>
                         
                        )
                    }): <div className="hide">{tree = "NO RECORD MATCHES"}</div>
                }
                
            </tbody>
        </table>
        <div className="nodata">{tree}</div>
        </>
    )
}

export default RegDetails;