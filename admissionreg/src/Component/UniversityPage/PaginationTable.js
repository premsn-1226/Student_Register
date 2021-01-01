import React,{useMemo} from 'react'
import { useTable , useGlobalFilter , useFilters , usePagination} from 'react-table'
import { Column } from './Column'
import { GobalFilter } from './GobalFilter'
import './tables.css'
export const PaginationTable = ({datas}) => {
    const columns = useMemo(() => Column,[])
    const data = useMemo(() => datas)
    const tableInstance = useTable({
        columns,
        data
    },useFilters,useGlobalFilter,usePagination)

    const{ getTableProps , getTableBodyProps , 
        headerGroups , page , nextPage , preGlobalFilteredRows,
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
          
        <table className="tables" {...getTableProps()}>
            <thead>
            {
            headerGroups.map(headerGroup=>(
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {
                        headerGroup.headers.map(column=>(
                        <th {...column.getHeaderProps()}>{column.render('Header')}
                        <span>{column.isSorted ? (column.isSortedDesc ? '▼' : '▲') : ""}</span>
                        <div>{column.canFilter ? column.render('Filter'): ''}</div>
                        </th>
                        ))
                    }
            </tr>
            ))
            }
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    page.length > 0 ?
                    page.map(row=>{
                        prepareRow(row)
                        return(
                            
                        <tr className="full" {...row.getRowProps()}>
                        {
                             row.cells.map((cell)=>{
                                return <td className="page" {...cell.getCellProps()}>{cell.render('Cell')}
                                </td>
                            })
                        }    
                         </tr>
                         
                        )
                    }): <div className="hide">{tree = "NO DATA MATCHES"}</div>
                }
                
            </tbody>
        </table>
        <div className="nodata">{tree}</div>
        </>
    )
}
