import React, { useEffect, useState } from 'react';
import {
  Form,
  Input,
  Button,
  DatePicker,
} from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { uploadImage } from '../../../services/uploadService';
import ImageUpload from '../../../components/ImageUpload';
import NetworkList from '../../../components/NetworkList';
import dayjs from 'dayjs';
const { TextArea } = Input

export default function AlbumForm({ initialValues, onSubmit }) {
  const [form] = Form.useForm();
  const [imageCoverFile, setImageCoverFile] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [fanVideos, setFanVideos] = useState([]);
  const [linksToBuy, setLinksToBuy] = useState([]);

  useEffect(() => {
    if (initialValues) {

      form.setFieldsValue({
        ...initialValues,
      });

      // image cover
      if (initialValues.imageCover) {
        setImageCoverFile([
          {
            uid: '-1',
            name: 'cover.jpg',
            status: 'done',
            url: initialValues.imageCover,
          },
        ]);
      }

      if (initialValues.photos) setPhotos(initialValues.photos);
      if (initialValues.fanVideos) setFanVideos(initialValues.fanVideos);
      if (initialValues.linksToBuy) setLinksToBuy(initialValues.linksToBuy);
    } else {
      form.resetFields();
      setImageCoverFile([]);
      setPhotos([]);
      setFanVideos([]);
      setLinksToBuy([]);
    }
  }, [initialValues, form]);

  const handleUploadSingle = async ({ file, onSuccess, onError }) => {
    try {
      const data = await uploadImage(file, 'album');
      const newFile = {
        uid: file.uid,
        name: file.name,
        status: 'done',
        url: data,
      };
      setImageCoverFile([newFile]); // chỉ 1 ảnh
      onSuccess('ok');
    } catch (err) {
      onError(err);
    }
  };

  const handleRemoveSingle = () => {
    setImageCoverFile([]);
  };

  const onFinish = (values) => {
    const payload = {
      ...values,
      releaseDate: dayjs(values.releaseDate),
      imageCover: imageCoverFile.length > 0 ? imageCoverFile[0].url : '',
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
      {initialValues && (
        <Form.Item name="id" hidden>
          <Input value={initialValues.id} />
        </Form.Item>
      )}

      <Form.Item name="name" label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item getValueProps={(value) => ({ value: value ? dayjs(value) : "", })} name="releaseDate" label="Release Date" rules={[{ required: true }]}>
        <DatePicker format={'MM/DD/YYYY'} style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item name="description" label="Description" rules={[{ required: true }]}>
        <TextArea />
      </Form.Item>

      <Form.Item label="Image Cover" required>
        <ImageUpload
          fileList={imageCoverFile}
          handleUpload={handleUploadSingle}
          handleRemove={handleRemoveSingle}
          maxCount={1}
        />
      </Form.Item>

      <Form.Item label="Photos (optional)">
        <ImageUpload
          fileList={photos.map((url, index) => ({
            uid: `photo-${index}`,
            name: `photo-${index}`,
            status: 'done',
            url,
          }))}
          handleUpload={async ({ file, onSuccess }) => {
            const url = await uploadImage(file, 'band');
            setPhotos((prev) => [...prev, url]);
            onSuccess('ok');
          }}
          handleRemove={(file) => {
            setPhotos((prev) => prev.filter((url) => url !== file.url));
          }}
        />
      </Form.Item>

      <Form.Item label="Fan Videos (YouTube URLs)">
        {fanVideos.map((url, index) => (
          <div key={index} className='flex mb-2 gap-2 items-center start'>
            <Input
              value={url}
              onChange={(e) => {
                const newList = [...fanVideos];
                newList[index] = e.target.value;
                setFanVideos(newList);
              }}
              placeholder="Enter YouTube URL"
              style={{ flex: 1 }}
            />
            <Button
              icon={<MinusCircleOutlined />}
              onClick={() => {
                const newList = fanVideos.filter((_, i) => i !== index);
                setFanVideos(newList);
              }}
              danger
            />
          </div>
        ))}

        <Button
          type="dashed"
          onClick={() => setFanVideos([...fanVideos, ''])}
          icon={<PlusOutlined />}
          block
        >
          Add Fan Video
        </Button>
      </Form.Item>

      <NetworkList value={linksToBuy} onChange={setLinksToBuy} displayText='Links to buy' name='linksToBuy' />

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}