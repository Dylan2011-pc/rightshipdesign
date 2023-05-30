import HomePage from "./pages/home/HomePage.js";
import PortsPage from "./pages/ports/Port";
import PortDetailPage from "./pages/ports/PortDetailPage";
import Anchor from "./components/side_bar_navigation/sidebar/assets/icons/anchor.svg";
import Desktop from "./components/side_bar_navigation/sidebar/assets/icons/desktop.svg";
import Person from "./components/side_bar_navigation/sidebar/assets/icons/person.svg";
import Settings from "./components/side_bar_navigation/sidebar/assets/icons/settings.svg";



export const routes = [
  { path: '/dashboard', exact: true, component: <HomePage/>, icon: Desktop, name: 'Dashboard' },
  { path: '/port', exact: true, component: <PortsPage/>, icon: Anchor, name: 'Ports' },
  { path: '/port/:name', exact:true, component: <PortDetailPage/>},
  { path: '/customer', exact: true, component: <HomePage/>, icon: Person, name: 'Customers' },
  { path: '/setting', exact: true, component: <HomePage/>, icon: Settings, name: 'Settings' },

];
