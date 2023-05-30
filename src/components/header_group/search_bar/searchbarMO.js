import React, { useState }  from 'react';
// import { useRootStore } from "../../../store/rootStore";
import { observer } from "mobx-react";
import SearchIcon20x20 from "./assets/icons/SearchIcon_20x20_gray.svg";
import XiconInput from "./assets/icons/xIconInput.svg";


const SearchBarMO = observer((props) => {
    // const { searchBarProcess, searching } = useRootStore();

    const [searchValue, setSearchValue] = useState('');

    const clearSearchInputValue = () => {
        setSearchValue('');
    };

  
    return (
        <div className={`bg-[#F5F5F5] justify-start items-center h-[50px] max-[639px]:flex hidden rounded-lg pr-5`}>
            <div className='px-[20px] py-[14px]'>
                <img className='min-w-[20px] min-h-[20px]' src={SearchIcon20x20} alt="" />
            </div>
            <input type="text" 
            placeholder='Search..' 
            value={searchValue} 
            onChange={(e) => setSearchValue(e.target.value)}
            className={`outline-none w-full bg-transparent placeholder:text-[16px] text-[16px] leading-[18.75px] placeholder:text-[#C6C6C6] peer pr-[20px]`}/>
            <img onClick={clearSearchInputValue} className='w-[20px] h-[20px] peer-placeholder-shown:hidden block cursor-pointer' src={XiconInput} alt="" />
        </div>
    );
  });
  
  export default SearchBarMO;