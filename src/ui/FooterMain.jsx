import { Layout, Row, Space, Button, Col, Typography } from "antd"
import { Link } from "react-router-dom"
const { Text } = Typography
const { Footer } = Layout
import { BiLogoFacebook, BiLogoTwitter, BiLogoYoutube, BiLogoInstagram } from 'react-icons/bi'
import { ArrowUpOutlined } from '@ant-design/icons'


export default function FooterMain() {
   return <Footer className="!bg-black">
      <div className="container mx-auto">
         <Row justify={'center'} className="mb-8">
            <Button
               type="link"
               icon={<ArrowUpOutlined />}
               className="button-footer font-cousine"
               onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
               BACK TO TOP
            </Button>
         </Row>

         <Row justify="center" className="mb-8">
            <Space size={80} >
               <BiLogoFacebook className="icon-footer text-2xl cursor-pointer" />
               <BiLogoTwitter className="icon-footer text-2xl cursor-pointer" />
               <BiLogoYoutube className="icon-footer text-2xl cursor-pointer" />
               <BiLogoInstagram className="icon-footer text-2xl cursor-pointer" />
            </Space>
         </Row>

         <Row justify={"center"}>
            <Col xs={24} md={8} className="text-center my-4 md:my-0 ">
               <Text className="!text-white font-cousine !text-xl">© 2025 SONY MUSIC ENTERTAINMENT UK LTD</Text>
            </Col>
         </Row>
      </div>
   </Footer>
}