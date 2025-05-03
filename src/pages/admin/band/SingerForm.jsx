import React, { useEffect, useState } from 'react';
import {
  Form,
  Input,
  InputNumber,
  Button,
} from 'antd';
import { uploadImage } from '../../../services/uploadService';
import ImageUpload from '../../../components/ImageUpload';
import SocialNetworkListInput from '../../../components/SocialNetworkListInput';


export default function SingerForm({ initialValues, onSubmit }) {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    if (initialValues) {
      form.setFieldsValue(initialValues);


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
      {
        initialValues && (
          <Form.Item name="id" hidden>
            <Input value={initialValues.id} />
          </Form.Item>
        )
      }


      <Form.Item name="name" label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name="description" label="Description">
        <Input.TextArea rows={3} />
      </Form.Item>

      <Form.Item label="Images">
        <ImageUpload
          value={fileList}
          onChange={setFileList}
          uploadFn={(file) => uploadImage(file, 'band')}
        />
      </Form.Item>

      <Form.Item name='networks' label="Social Networks" rules={[{ required: false }]}>
        <SocialNetworkListInput />
      </Form.Item>


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
