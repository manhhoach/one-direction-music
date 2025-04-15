import React, { useEffect, useState } from 'react';
import {
  Form,
  Input,
  InputNumber,
  Button,
  Upload,
  Space,
  Typography,
} from 'antd';
import { PlusOutlined, DeleteOutlined, UploadOutlined } from '@ant-design/icons';
import { uploadImage } from '../../../services/uploadService';
import ImageUpload from '../../../components/ImageUpload';
import NetworkList from '../../../components/NetworkList';

const { Text } = Typography;

export default function SingerForm({ initialValues, onSubmit }) {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    if (initialValues) {
      form.setFieldsValue(initialValues);

      // Convert image URLs to file list format
      if (initialValues.images) {
        const imageFiles = initialValues.images.map((url, index) => ({
          uid: index.toString(),
          name: `image-${index}`,
          status: 'done',
          url,
        }));
        setFileList(imageFiles);
      }
    } else {
      form.resetFields();
      setFileList([]);
    }
  }, [initialValues]);

  const handleUpload = async ({ file, onSuccess, onError }) => {
    try {
      const data = await uploadImage(file);
      const newFile = {
        uid: file.uid,
        name: file.name,
        status: 'done',
        url: data,
      };

      setFileList((prev) => [...prev, newFile]);
      onSuccess('ok');
    } catch (err) {
      onError(err);
    }
  };

  const handleRemove = (file) => {
    setFileList((prev) => prev.filter((f) => f.uid !== file.uid));
  };

  const onFinish = (values) => {
    const images = fileList.map((f) => f.url); // lấy đúng URL ảnh
    const payload = {
      ...values,
      images,
    };
    onSubmit(payload);
  };

  return (
    <Form
      layout="vertical"
      form={form}
      onFinish={onFinish}
      initialValues={initialValues}
    >
      <Form.Item name="name" label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name="description" label="Description">
        <Input.TextArea rows={3} />
      </Form.Item>

      <Form.Item label="Images">
        <ImageUpload
          fileList={fileList}
          handleUpload={handleUpload}
          handleRemove={handleRemove}
        />
      </Form.Item>


      <NetworkList />

      <Form.Item name="order" label="Order">
        <InputNumber min={0} style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
