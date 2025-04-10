import { Layout, Menu } from "antd"
import { Link } from "react-router-dom"

const { Header } = Layout

export default function HeaderMain() {
   return (
      <>
         <Header className="sticky flex top-0 justify-center !z-100 !bg-black">
            <Link className="link-to-home" to='/home'></Link>
         </Header>
         <Header className="!bg-black">
            <Menu mode="horizontal" theme="dark" className="!bg-black w-full h-full justify-center gap-20">
               <Menu.Item key="music">
                  <Link
                     to="/music"
                     className="link-style"
                  >
                     MUSIC
                  </Link>
               </Menu.Item>
               <Menu.Item key="band">
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