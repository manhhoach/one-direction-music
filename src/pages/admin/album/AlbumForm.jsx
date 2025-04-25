import React, { useEffect, useState } from 'react';
import {
  Form,
  Input,
  Button,
  DatePicker,
} from 'antd';
import dayjs from 'dayjs';
import { uploadImage } from '../../../services/uploadService';
import ImageUpload from '../../../components/ImageUpload';
import SocialNetworkListInput from '../../../components/SocialNetworkListInput';
import FanVideosInput from '../../../components/FanVideosInput';
import ColorPickerInput from '../../../components/ColorPickerInput';

const { TextArea } = Input;

export default function AlbumForm({ initialValues, onSubmit }) {
  const [form] = Form.useForm();
  const [imageCoverFile, setImageCoverFile] = useState([]);
  const [imageFile, setImageFile] = useState([]);
  const [fanVideos, setFanVideos] = useState([]);
  const [linksToBuy, setLinksToBuy] = useState([]);

  useEffect(() => {
    if (initialValues) {
      form.setFieldsValue({ ...initialValues });

      if (initialValues.imageCover) {
        setImageCoverFile([{
          uid: '-1',
          name: 'cover.jpg',
          status: 'done',
          url: initialValues.imageCover,
        }]);
      }

      if (initialValues.image) {
        setImageFile([{
          uid: '-2',
          name: 'image.jpg',
          status: 'done',
          url: initialValues.image,
        }]);
      }

      if (initialValues.fanVideos) setFanVideos(initialValues.fanVideos);
      if (initialValues.linksToBuy) setLinksToBuy(initialValues.linksToBuy);
    } else {
      form.resetFields();
      setImageCoverFile([]);
      setImageFile([]);
      setFanVideos([]);
      setLinksToBuy([]);
    }
  }, [initialValues, form]);

  const onFinish = (values) => {
    const payload = {
      ...values,
      releaseDate: dayjs(values.releaseDate),
      imageCover: imageCoverFile.length > 0 ? imageCoverFile[0].url : '',
      image: imageFile.length > 0 ? imageFile[0].url : '',
      fanVideos,
      linksToBuy,
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
      {initialValues?.id && (
        <Form.Item name="id" hidden>
          <Input />
        </Form.Item>
      )}

      <Form.Item name="name" label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item
        name="releaseDate"
        label="Release Date"
        rules={[{ required: true }]}
        getValueProps={(value) => ({ value: value ? dayjs(value) : "" })}
      >
        <DatePicker format={'MM/DD/YYYY'} style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item name="description" label="Description" rules={[{ required: true }]}>
        <TextArea />
      </Form.Item>

      <Form.Item label="Image Cover" required>
        <ImageUpload
          value={imageCoverFile}
          onChange={setImageCoverFile}
          uploadFn={(file) => uploadImage(file, 'album')}
          maxFiles={1}
        />
      </Form.Item>

      <Form.Item label="Image" required>
        <ImageUpload
          value={imageFile}
          onChange={setImageFile}
          uploadFn={(file) => uploadImage(file, 'album')}
          maxFiles={1}
        />
      </Form.Item>
      <Form.Item name="mainColor" label="Main Color">
        <ColorPickerInput />
      </Form.Item>

      <Form.Item name='fanVideos' label="Fan Videos (YouTube URLs)">
        <FanVideosInput value={fanVideos} onChange={setFanVideos} />
      </Form.Item>

      <Form.Item name='linksToBuy' label="Links to buy">
        <SocialNetworkListInput value={linksToBuy} onChange={setLinksToBuy} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
