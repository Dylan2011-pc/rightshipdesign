import React, { useEffect, useState } from "react";
import fetchGoogleSheetData from "../../service/GoogleSheetService";
import DataTable from "../../components/data_table/DataTable";
import CardIcon from "./assets/icons/Card.svg";
import TableIcon from "./assets/icons/TableCells.svg";
import CardList from "../../components/cards/Cards";
import Tooltip from "../../components/tooltip/index";

const PortsPage = () => {
  const [data, setData] = useState([]);
  const [viewMode, setViewMode] = useState("table");
  //using fetch google sheet data service
  useEffect(() => {
    const fetchData = async () => {
      const spreadsheetId = "1rCoaE4pJ_YqwIxreaiorsXZ-vHpnXIc4ZuTFPQLIM-s";
      const range = "Ports";
      const apiKey = "AIzaSyDiU5tUSUJsW9b5Z2JNYyGTxjkmwBB4lls";
      const rows = await fetchGoogleSheetData(spreadsheetId, range, apiKey);
      setData(rows);
    };

    fetchData();
  }, []);

  //Viewmode function
  const toggleViewMode = (e) => {
    setViewMode(e);
  };

  //colum render
  const columns =
    data.length > 0
      ? data[0]
          .map((header, index) => {
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
          })
          .filter((column) => column !== null)
      : [];

  return (
    <div className="w-full h-full min-[900px]:px-[35px] px-[20px]">
      <div className="w-full py-[35px] bg-white flex justify-between items-center relative">
        <p className="font-extrabold text-[36px] leading-[36px] text-[#F36B3C]">
          Ports
        </p>
        <div className="flex justify-end gap-x-5 ">
          <Tooltip></Tooltip>
          {viewMode !== "table" ? (
            <button
              className="p-1 rounded-md shadow-2xl"
              onClick={() => toggleViewMode("table")}
            >
              <img className="w-[32px] h-[32px]" src={TableIcon} alt="" />
            </button>
          ) : (
            <button
              className="p-1 rounded-md shadow-2xl"
              onClick={() => toggleViewMode("cards")}
            >
              <img className="w-[32px] h-[32px]" src={CardIcon} alt="" />
            </button>
          )}
        </div>
      </div>
      {
        viewMode !== 'table' ?
        <CardList data={data} />      
        :
        <div className='overflow-x-auto'>
          <DataTable columns={columns} data={data} navigation={true}></DataTable>
        </div>
      }
    </div>
  );
};

export default PortsPage;
