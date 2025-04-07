import { Layout, Row, Space, Button, Col, Typography } from "antd"
import { Link } from "react-router-dom"
const { Text } = Typography
const { Footer } = Layout
import {
   FacebookOutlined,
   TwitterOutlined,
   InstagramOutlined,
   YoutubeOutlined,
   ArrowUpOutlined,
   LeftOutlined,
   RightOutlined,
} from "@ant-design/icons"

export default function FooterMain() {
   return <Footer>
      <div className="container mx-auto">
         <Row justify="center" className="mb-8">
            <Space size="large">
               <FacebookOutlined className="text-2xl cursor-pointer hover:text-gray-300" />
               <TwitterOutlined className="text-2xl cursor-pointer hover:text-gray-300" />
               <YoutubeOutlined className="text-2xl cursor-pointer hover:text-gray-300" />
               <InstagramOutlined className="text-2xl cursor-pointer hover:text-gray-300" />
            </Space>
         </Row>

         <Row>
            <Col xs={24} md={8} className="text-center md:text-left">
               <Link href="#" className="text-white hover:text-gray-300">
                  SYCO MUSIC
               </Link>
            </Col>
            <Col xs={24} md={8} className="text-center my-4 md:my-0">
               <Text>© 2025 SONY MUSIC ENTERTAINMENT UK LTD</Text>
            </Col>
            <Col xs={24} md={8} className="text-center md:text-right">
               <Link href="#" className="text-white hover:text-gray-300">
                  PRIVACY & COOKIE POLICY
               </Link>
            </Col>
         </Row>
      </div>
   </Footer>
}