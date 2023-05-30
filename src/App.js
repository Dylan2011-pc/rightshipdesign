import React from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { routes } from "./routes";
import Header from "./components/header_group/header/index";
import LeftSideNavigationBar from "./components/side_bar_navigation/sidebar/index";

function App() {
  return (
    <div className='w-full h-screen'>
      <Header></Header>
      <LeftSideNavigationBar></LeftSideNavigationBar>
      <div className='mt-[80px] min-[1024px]:pl-[280px] min-[900px]:pl-[180px] pb-[80px]'>
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
            {routes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  element={route.component}
                />
              );
            })}
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
