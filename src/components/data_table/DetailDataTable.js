import React from 'react';

const DetailDataTable = ({ data }) => {
  return (
    <table className='border-collapse w-full shadow-detail-datatable'>
      <tbody>
        {Object.entries(data).map(([key, value]) => (
          <tr key={key} className='border'>
            <th className='border p-2 text-left font-semibold'>{key}</th>
            <td className='border p-2 text-black'>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DetailDataTable;
