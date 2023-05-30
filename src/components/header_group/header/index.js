import React, { useEffect } from "react";
import { useRootStore } from "../../../store/rootStore";
import "./assets/index.css";
import { observer } from "mobx-react";
// import { toJS } from "mobx";
import RightShipLogo from "./assets/img/Logo.png";
import SearchBar from "../search_bar/index";
import SearchBarMO from "../search_bar/searchbarMO";
import Avatar from "../avatar/index";
import toogleMenuIcon from "./assets/img/menuToggle.svg";
import ChevronArrowUp from "./assets/img/ChevronArrowUp.svg";

const Header = observer((props) => {
  const { toggleLeftSideBar, searching, endSearchingProcess } = useRootStore();
  // const rootStore = useRootStore();
  // const data = toJS(rootStore);
  // console.log(data);
  useEffect(() => {

  }, []);

  const handleToggleLeftSideBar = () => {
    toggleLeftSideBar();
  };

  const handleEndSearching = () => {
    endSearchingProcess();
  };

  return (
    <>
      <header className="w-full bg-white fixed z-50 h-[80px] top-0 border-b border-b-[#E8E8E8] py-[16px]  min-[900px]:pl-[24px] px-[20px] flex justify-between items-center">
        <div className='min-[900px]:w-[56.25%] w-[calc(100%-60px)] flex justify-between items-center h-full max-[639px]:w-[calc(100%-40px)]'>
          <div className='flex'>
            <div className='mr-5 items-center hidden max-[900px]:flex'>
                <button onClick={handleToggleLeftSideBar}>
                  <img className='min-w-[28px]' src={toogleMenuIcon} alt="" />
                </button>
            </div>
            <img className='max-[500px]:w-[90px]' src={RightShipLogo} alt="" />
          </div>
          <SearchBar></SearchBar>
        </div>
        <div className='min-[900px]:w-[43.75%]'>
          <Avatar></Avatar>
        </div>
      </header>
      <div className={`fixed w-full bg-white z-[39] p-4 rounded-b-lg transition-all duration-200 ease-out ${!searching ? 'translate-y-[-160px]' : ''}`}>
        <SearchBarMO></SearchBarMO>
        <div className='w-full flex justify-center pt-4 ' onClick={handleEndSearching} >
            <img className='w-[24px]' src={ChevronArrowUp} alt="" />
        </div>
      </div>
      <div
      className={`fixed inset-0 min-[900px]:hidden bg-black bg-opacity-30 z-30 ${searching ? '' : 'hidden'}`}
      ></div>
    </>
  );
});

export default Header;
