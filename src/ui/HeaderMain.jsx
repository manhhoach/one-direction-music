import { Layout, Menu } from "antd"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom";

const { Header } = Layout

export default function HeaderMain() {
   const location = useLocation();
   const path = location.pathname;
   let selectedKey = "";
   if (path.startsWith("/music")) {
      selectedKey = "music";
   } else if (path.startsWith("/band")) {
      selectedKey = "band";
   }
   return (
      <>
         <Header className="sticky flex top-0 justify-center !z-100 !bg-black">
            <Link className="link-to-home" to='/home'></Link>
         </Header>
         <Header className="!bg-black">
            <Menu mode="horizontal" theme="dark"
               className="!bg-black w-full h-full justify-center gap-20 custom-menu-style"
               selectedKeys={[selectedKey]} >
               <Menu.Item className="menu-item-style" key="music">
                  <Link
                     to="/music"
                     className="link-style"
                  >
                     MUSIC
                  </Link>
               </Menu.Item>
               <Menu.Item className="menu-item-style" key="band">
                  <Link
                     to="/band"
                     className="link-style"
                  >
                     BAND
                  </Link>
               </Menu.Item>
            </Menu>
         </Header>
      </>

   )
}