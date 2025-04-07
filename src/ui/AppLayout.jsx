import { Outlet } from "react-router-dom";
import HeaderMain from "./HeaderMain";
import { Layout } from "antd"
import FooterMain from "./FooterMain";
const { Content } = Layout

export default function AppLayout() {
   return (
      <Layout className="!min-h-screen flex flex-col">
         <HeaderMain />
         <Content className="flex-1">
            <Outlet />
         </Content>
         <FooterMain>
         </FooterMain>
      </Layout>

   )
}