import { Outlet } from "react-router-dom";
import HeaderMain from "./HeaderMain";
import { Layout } from "antd"
import FooterMain from "./FooterMain";
const { Content } = Layout

export default function AppLayout() {
   return (
      <Layout>
         <HeaderMain />
         <Content>
            <Outlet />
         </Content>
         <FooterMain>
         </FooterMain>
      </Layout>

   )
}