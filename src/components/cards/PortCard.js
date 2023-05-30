import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../data_table/assets/index.scss";
import ChevronArrowRight from "./assets/icons/chevronArrowRight20x20.svg";
import '../data_table/assets/index.scss';

const PortCard = ({ titles, index, data }) => {
    const navigate = useNavigate();
    const [portObject, setPortObject] = useState({});
    
    useEffect(() => {
        function convertArraysToObject(titles, data) {
            if (titles.length !== data.length) {
              throw new Error('Titles and data arrays must have the same length');
            }
          
            const portData = {};
          
            for (let i = 0; i < titles.length; i++) {
              const title = titles[i];
              const value = data[i];
              portData[title] = value;
            }
            
            setPortObject(portData);
        }
    
        convertArraysToObject(titles, data);
      }, []);

    const toPortDetailPage = (port) => {
        
        const portData = JSON.stringify(port);
        navigate(`/port/${port.Name}`, { state: {portData} });
    };
    //console.log(data);
      

    if (index === 0) {
        return null;
    }

    return (
      <div className="shadow-port-card bg-white rounded-b-2xl rounded-tl-2xl">
        <div onClick={() =>{toPortDetailPage(portObject)}} 
        className='w-full rounded-tl-2xl  rounded-br-2xl bg-white shadow-port-card-header p-4 flex justify-between items-center cursor-pointer'>
            <p className='text-[#F36B3C] font-semibold text-xl leading-[24px] truncate'>
                {
                    portObject.Name
                }
            </p>
            <div>
                <img className='w-[24px] h-[24px]' src={ChevronArrowRight} alt="" />
            </div>
        </div>
        <div className='bg-white p-5 rounded-b-2xl space-y-1 mt-1'>
            <p className='text-sm font-semibold'>
                {
                    Object.keys(portObject)[1]
                }
            </p>
            <p className='text-[#696969] line-clamp-3'>
                {
                    portObject.Description
                }
            </p>
        </div>
      </div>
    );
};


export default PortCard;
