import { Form, Input, Button, message, Card } from 'antd';
import { register } from '../../services/authService';

const Register = () => {
   const onFinish = async (values) => {
      try {
         await register(values);
         message.success('Register successfully!');
      } catch (error) {
         message.error(error.response?.data?.message || 'Register failed');
      }
   };

   return (
      <div style={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
         <Card title="Register" style={{ width: 400 }}>
            <Form layout="vertical" onFinish={onFinish}>
               <Form.Item
                  label="Username"
                  name="username"
                  rules={[{ required: true }]}
               >
                  <Input />
               </Form.Item>
               <Form.Item
                  label="FullName"
                  name="fullname"
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
                     Register
                  </Button>
               </Form.Item>
            </Form>
         </Card>
      </div>
   );
};

export default Register;
