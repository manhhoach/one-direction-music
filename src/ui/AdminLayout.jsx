// src/layouts/AdminLayout.tsx
import React from 'react';
import { Layout, Menu } from 'antd';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import {
   AppstoreAddOutlined,
   PictureOutlined,
   SoundOutlined,
   TeamOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

const AdminLayout = () => {
   const navigate = useNavigate();
   const location = useLocation();

   const menuItems = [
      {
         key: '/admin/band',
         icon: <TeamOutlined />,
         label: 'Band Manager',
      },
      {
         key: '/admin/album',
         icon: <PictureOutlined />,
         label: 'Album Manager',
      },
      {
         key: '/admin/music',
         icon: <AppstoreAddOutlined />,
         label: 'Music Manager',
      },
   ];

   return (
      <Layout style={{ minHeight: '100vh' }}>
         <Sider collapsible>
            <div className="logo" style={{ color: 'white', padding: '16px', fontWeight: 'bold' }}>
               Admin
            </div>
            <Menu
               theme="dark"
               mode="inline"
               selectedKeys={[location.pathname]}
               onClick={(e) => navigate(e.key)}
               items={menuItems}
            />
         </Sider>

         <Layout>
            <Header style={{ background: '#fff', padding: 0, textAlign: 'center' }}>
               <h3 style={{ margin: 0 }}>Dashboard admin</h3>
            </Header>
            <Content style={{ margin: '16px' }}>
               <Outlet />
            </Content>
         </Layout>
      </Layout>
   );
};

export default AdminLayout;
