import React, { useEffect } from "react";
import ExampleAvatarImg from "./assets/img/Avatar.png"

const Avatar = () => {

  useEffect(() => {
  }, []);

  return (
    <div className='relative cursor-pointer float-right'>
        <img className='w-[40px] h-[40px] ' src={ExampleAvatarImg} alt="" />
    </div>
  );
};

export default Avatar;
