import React from 'react';
import "../data_table/assets/index.scss";

const CardsComponent = ({ data }) => {
  return (
    <div className="grid min-[600px]:grid-cols-3 grid-cols-2 min-[900px]:gap-5 sm:gap-4 gap-3">
      {Object.entries(data).map(([key, value]) => (
        <div
          key={key}
          className={`bg-white p-4 shadow-card rounded-xl flex flex-col 
          ${
            key !== 'Name' ? 'gap-y-5 justify-between' : 'max-[599px]:col-span-2'
          } 
          ${
            key === 'Description' ? 'col-span-2' : ''
          }`}
        >
          <h3 className="font-extrabold min-[500px]:text-sm text-xs">{key}</h3>
          <p className={`font-medium text-[#777777] ${key === 'Name' ? 'min-[900px]:text-[28px] text-[22px] flex justify-center items-center h-full' : 'min-[900px]:text-xl min-[500px]:text-lg text-sm'}`}>
            {value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CardsComponent;
