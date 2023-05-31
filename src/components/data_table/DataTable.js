import React from 'react';
import { useTable } from 'react-table';
import "./assets/index.scss";
import { useNavigate } from 'react-router-dom';


const DataTable = ({ columns, data , navigation }) => {
  const navigate = useNavigate();
  const tableInstance = useTable({ columns, data });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;


  const toPortDetailPage = (port) => {
    if (!navigation) {
      return;
    }
    const portData = JSON.stringify(port.values);
    navigate(`/port/${port.values.Name}`, { state: {portData} });
  };

  return (
    <table {...getTableProps()} className='border-collapse w-full relative overflow-x-auto'>
      <thead className='sticky top-[0px]'>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()} className='bg-gray-200'>
            {headerGroup.headers.map((column, columnIndex) => {
              if (column.Header === "Description") {
                return(
                  <th {...column.getHeaderProps()} className='border p-2 hidden'>
                  { column.render('Header')}
                  </th>
                )
              }
              return(
                <th {...column.getHeaderProps()} className='border p-2'>
                  {column.render('Header')}
                </th>
              )
            }
            )}
          </tr>
        ))}
      </thead>
      
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          if (row.id === '0') {
            return null;
          }
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} 
            onClick={() => toPortDetailPage(row)} 
            className='border hover:bg-[#ff7954] cursor-pointer group'
            >
              {row.cells.map((cell) => {
                if (cell.column.Header === 'Description') {
                  return null;
                }
                return(
                  <td {...cell.getCellProps()} className='border p-2 group-hover:text-white '>
                  {cell.render('Cell')}
                  </td>
              )})}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DataTable;
