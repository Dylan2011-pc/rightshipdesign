import React, { useState }  from 'react';
import { useRootStore } from "../../../store/rootStore";
import { observer } from "mobx-react";
import SearchIcon20x20 from "./assets/icons/SearchIcon_20x20_gray.svg";
import XiconInput from "./assets/icons/xIconInput.svg";



const SearchBar = observer((props) => {
    const { searchBarProcess, searching} = useRootStore();

    const [searchValue, setSearchValue] = useState('');

    const clearSearchInputValue = () => {
        setSearchValue('');
    };

    const handleToggleSearchBar = () => {
        searchBarProcess();
      };
  
    return (
        <div className={`bg-[#F5F5F5] max-[639px]:bg-transparent min-[1366px]:w-[500px] rounded-[6px] flex justify-start items-center h-full`}>
            <div className='px-[20px] py-[14px]'>
                <img onClick={handleToggleSearchBar} className='min-w-[20px] min-h-[20px] hidden max-[639px]:block' src={!searching ?  SearchIcon20x20 : ''} alt="" />
                <img className='min-w-[20px] min-h-[20px] block max-[639px]:hidden' src={SearchIcon20x20} alt="" />
            </div>
            <input type="text" 
            placeholder='Search..' 
            value={searchValue} 
            onChange={(e) => setSearchValue(e.target.value)}
            className={`hidden min-[640px]:block outline-none w-full bg-transparent placeholder:text-[16px] text-[16px] leading-[18.75px] placeholder:text-[#C6C6C6] peer pr-[20px]`}/>
            <img onClick={clearSearchInputValue} className='w-[20px] h-[20px] peer-placeholder-shown:hidden block cursor-pointer' src={XiconInput} alt="" />
        </div>
    );
  });
  
  export default SearchBar;