import React from 'react';
import Card from "./PortCard";

const CardList = ({ data }) => {
 
  return (
    <div className="card-list w-full grid grid-cols-1 min-[550px]:grid-cols-2 min-[1366px]:grid-cols-3 min-[1024px]:gap-7 min-[900px]:gap-6 gap-5 mt-1">
      {data.map((item, index) => (
        <Card key={index} data={item} titles={data[0]} index={index} />
      ))}
    </div>
  );
};

export default CardList;
