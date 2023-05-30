import { createContext, useContext } from "react";
//import { action } from "mobx";
import { useLocalObservable } from 'mobx-react-lite';
import { routes } from "../routes";




export const RootStoreContext = createContext(null);

export const RootStoreProvider = ({ children }) => {
  const store = useLocalObservable(() => ({
    routes: routes,
    showLeftSideBar: false,
    searching: false,
    toggleLeftSideBar: () => {
      store.showLeftSideBar = !store.showLeftSideBar;
      if (store.searching === true) {
        store.searching = false;
      }
    },
    closeLeftSideBar: () => {
      store.showLeftSideBar = false;
    },
    searchBarProcess: () => {
      store.searching = true;
      store.showLeftSideBar = false;
    },
    endSearchingProcess: () => {
      store.searching = false;
    }

  }));

  return (
    <RootStoreContext.Provider value={store}>
      {children}
    </RootStoreContext.Provider>
  );
};
export const useRootStore = () => useContext(RootStoreContext);