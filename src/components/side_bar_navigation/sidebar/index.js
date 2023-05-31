import React, { useEffect } from "react";
import { useRootStore } from "../../../store/rootStore";
import { observer } from "mobx-react";
import { toJS } from "mobx";


const LeftSideNavigationBar = observer((props) => {
  const rootStore = useRootStore();
  const rootStoreData = toJS(rootStore);
  const currentPath = window.location.pathname + window.location.search;
  const {showLeftSideBar, closeLeftSideBar} = rootStoreData

  useEffect(() => {
  }, []);

  const handleCloseLeftSideBar = () => {
    closeLeftSideBar();
  };

  const renderSideBarListItems = () => {
    return rootStoreData.routes.map((route, index) => {
        const isActive = currentPath.startsWith(route.path);
        if (!route.name) {
          return null;
        }
        return (
          <li key={index}>
            <a href={route.path} className={`group h-[48px] px-[20px] flex gap-x-[20px] items-center border-l-[4px] ${isActive ? 'border-l-[#F36B3C]' : 'border-l-transparent'}`}>
                <img className='w-[24px] h-[24px]' src={route.icon? route.icon : ''} alt="" />
                <p className='text-[#003745] leading-[18.75px] font-normal group-hover:text-[#F36B3C]'>{route.name}</p>
            </a>
          </li>
        );
    });
  }

  return (
    <>
      <aside className={`fixed min-[900px]:left-0 ${showLeftSideBar? 'left-0' :'left-[-200%]'} top-0 min-[1024px]:w-[280px] min-[900px]:w-[180px] max-[900px]:w-[250px] sm:pt-[180px] pt-[100px] bg-white z-40 border-r border-r-[#E8E8E8] h-screen transition-all duration-300`}>
          <ul>
              {renderSideBarListItems()}
          </ul>
      </aside>
      <div
      className={`fixed inset-0 min-[900px]:hidden bg-black bg-opacity-30 z-30 ${showLeftSideBar ? '' : 'hidden'}`}
      onClick={handleCloseLeftSideBar}
    ></div>
    </>
  );
});

export default LeftSideNavigationBar;
