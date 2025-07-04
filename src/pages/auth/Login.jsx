import { Form, Input, Button, message, Card } from 'antd';
import { login } from '../../services/authService';

const Login = () => {
   const onFinish = async (values) => {
      try {
         await login(values);
         message.success('Login successfully!');
         location.href = '/admin/singer'
      } catch (error) {
         message.error(error.response?.data?.message || 'Login failed');
      }
   };

   return (
      <div style={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
         <Card title="Login" style={{ width: 400 }}>
            <Form layout="vertical" onFinish={onFinish}>
               <Form.Item
                  label="Username"
                  name="username"
                  rules={[{ required: true }]}
               >
                  <Input />
               </Form.Item>
               <Form.Item
                  label="Password"
                  name="password"
                  rules={[{ required: true }]}
               >
                  <Input.Password />
               </Form.Item>
               <Form.Item>
                  <Button type="primary" htmlType="submit" block>
                     Login
                  </Button>
               </Form.Item>
            </Form>
         </Card>
      </div>
   );
};

export default Login;
