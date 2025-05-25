import { Layout, Row, Space, Button, Col, Typography } from "antd"
import { Link } from "react-router-dom"
const { Text } = Typography
const { Footer } = Layout
import { BiLogoFacebook, BiLogoTwitter, BiLogoYoutube, BiLogoInstagram } from 'react-icons/bi'
import { ArrowUpOutlined } from '@ant-design/icons'

export default function FooterMain() {
   return (
      <Footer className="!bg-black px-4 lg:px-0">
         <div className="container mx-auto">
            {/* Back to top button */}
            <Row justify={'center'} className="mb-6 md:mb-8">
               <Button
                  type="link"
                  icon={<ArrowUpOutlined />}
                  className="button-footer font-cousine text-sm md:text-base"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
               >
                  BACK TO TOP
               </Button>
            </Row>

            {/* Social media icons */}
            <Row justify="center" className="mb-6 md:mb-8">
               <Space
                  size={[8, 12]}
                  wrap
                  className="flex justify-center md:space-x-4 lg:space-x-6"
               >
                  <BiLogoFacebook className="icon-footer text-base md:text-lg lg:text-xl xl:text-2xl cursor-pointer hover:scale-110 transition-transform duration-200" />
                  <BiLogoTwitter className="icon-footer text-base md:text-lg lg:text-xl xl:text-2xl cursor-pointer hover:scale-110 transition-transform duration-200" />
                  <BiLogoYoutube className="icon-footer text-base md:text-lg lg:text-xl xl:text-2xl cursor-pointer hover:scale-110 transition-transform duration-200" />
                  <BiLogoInstagram className="icon-footer text-base md:text-lg lg:text-xl xl:text-2xl cursor-pointer hover:scale-110 transition-transform duration-200" />
               </Space>
            </Row>

            {/* Copyright */}
            <Row justify={"center"}>
               <Col xs={24} md={18} lg={12} className="text-center my-4 md:my-0">
                  <Text className="!text-white font-cousine text-sm md:text-lg lg:text-xl px-4 md:px-0 leading-relaxed">
                     © 2025 SONY MUSIC ENTERTAINMENT UK LTD
                  </Text>
               </Col>
            </Row>
         </div>
      </Footer>
   )
}