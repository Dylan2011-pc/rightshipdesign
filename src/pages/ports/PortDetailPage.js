import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import DetailDataTable from "../../components/data_table/DetailDataTable";
import fetchGoogleSheetData from "../../service/GoogleSheetService";
import DataTable from "../../components/data_table/DataTable";
import DetailCards from "../../components/cards/DetailCard";
import CardIcon from "./assets/icons/Card.svg";
import TableIcon from "./assets/icons/TableCells.svg";


const PortDetailPage = () => {
  const location = useLocation();
  const portData = location.state && location.state.portData;
  const port = portData ? JSON.parse(portData) : null;
  
  const [data, setData] = useState([]);

  const [viewMode, setViewMode] = useState('table')

  useEffect(() => {
    const fetchData = async () => {
      const spreadsheetId = '1rCoaE4pJ_YqwIxreaiorsXZ-vHpnXIc4ZuTFPQLIM-s';
      const range = 'Vessels!A1:F22';
      const apiKey = 'AIzaSyDiU5tUSUJsW9b5Z2JNYyGTxjkmwBB4lls';
      const rows = await fetchGoogleSheetData(spreadsheetId, range, apiKey);
      setData(rows);
    };

    fetchData();
  }, []);

  const columns = data.length > 0 ? data[0].map((header, index) => {
    return {
      Header: header,
      accessor: (row, i) => {
        //check if the index = 0 meant its the head of the sheet 
        if (i !== 0) {
          return row[index];
        }
        return null;
      },
    };
}).filter((column) => column !== null) : [];
    //check detailpage data
  if (!port) {
    // Handle the case when the port information is not available
    return <div>No port information found.</div>;
  }

  //Viewmode function
  const toggleViewMode = (e) => {
    setViewMode(e)
  }


  // Render the port details
  return (
    <div className='w-full h-full min-[900px]:px-[35px] px-[20px]'>
      <div className='w-full py-[35px] bg-white'>
        <p className='font-extrabold text-[36px] leading-[36px] text-[#F36B3C]'>
          {port.Name}'s Detail
        </p>
      </div>
      <section className='pb-[35px]'>
        <div className='w-full flex justify-between items-center'>
            <h1 className='text-[22px] leading-[22px] font-semibold'>
                Basic information
            </h1>
            <div className='flex justify-end gap-x-5'>
                {
                    viewMode !== 'table' ?
                    <button className='p-1 rounded-md shadow-2xl' onClick={() => toggleViewMode('table')}>
                    <img className='w-[32px] h-[32px]' src={TableIcon} alt="" />
                    </button>
                    :
                    <button className='p-1 rounded-md shadow-2xl' onClick={() => toggleViewMode('cards')}>
                        <img className='w-[32px] h-[32px]' src={CardIcon} alt="" />
                    </button>
                }
            </div>
        </div>
        <div className='mt-5'>
            {
                viewMode === 'table' ? 
                <DetailDataTable data={port}/>:<DetailCards data={port}/>
            }
        </div>
      </section>

      <section className='pt-[35px] space-y-5'>
        <h1 className='text-[22px] leading-[22px] font-semibold'>
           Vessels data
        </h1>
        <div className='overflow-x-auto'>
          <DataTable columns={columns} data={data}></DataTable>
        </div>
      </section>
    </div>
  );
};

export default PortDetailPage;
