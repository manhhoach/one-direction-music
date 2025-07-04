import {
   Form,
   Input,
   Row,
   DatePicker,
   Col,
   InputNumber,
   Button,
   Checkbox,
} from "antd";
import { useEffect, useState } from "react";
import ImageUpload from "../../../components/ImageUpload";
import { uploadImage } from "../../../services/uploadService";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import dayjs from "dayjs";

export default function SongForm({ initialValues, onSubmit }) {
   const [form] = Form.useForm()
   const [photos, setPhotos] = useState([])

   const onFinish = (values) => {
      var dataSubmit = {
         ...values,
         photos: photos.map((item) => item.url),
         releaseDate: dayjs(values.releaseDate),
      }
      onSubmit(dataSubmit)
   }

   useEffect(() => {
      if (initialValues) {
         form.setFieldsValue({ ...initialValues })
         if (initialValues.photos) {
            const photoFiles = initialValues.photos.map((url, index) => {
               return {
                  uid: index.toString(),
                  name: `photo-${index}`,
                  status: 'done',
                  url,
               }
            })
            setPhotos(photoFiles)
         } else {
            form.resetFields()
            setPhotos([])
         }
      }
   }, [initialValues])

   return (
      <Form
         layout="vertical"
         form={form}
         onFinish={onFinish}
         initialValues={initialValues}>
         {
            initialValues?.id && (
               <Form.Item name='id' hidden><Input /></Form.Item>
            )
         }

         <Row gutter={16} >
            <Col span={12}>
               <Form.Item name='name' label='Name' rules={[{ required: true }]}>
                  <Input />
               </Form.Item>
            </Col>

            <Col span={12}>
               <Form.Item name='authors' label='Authors'>
                  <Input />
               </Form.Item>
            </Col>

            <Col span={12}>
               <Form.Item name='youtubeUrl' label='Youtube Url'>
                  <Input />
               </Form.Item>
            </Col>

            <Col span={12}>
               <Form.Item
                  name="releaseDate"
                  label="Release Date"
                  getValueProps={(value) => ({ value: value ? dayjs(value) : "" })}
               >
                  <DatePicker format={'MM/DD/YYYY'} style={{ width: '100%' }} />
               </Form.Item>
            </Col>

            <Col span={12}>
               <Form.Item name='order' label='Order' rules={[{ required: true }]}>
                  <InputNumber />
               </Form.Item>
            </Col>

            <Col span={12}>
               <Form.Item name='isBonus' label='Is Bonus' valuePropName="checked">
                  <Checkbox />
               </Form.Item>
            </Col>

            <Col span={12}>
               <Form.Item label="Photos">
                  <ImageUpload
                     value={photos}
                     onChange={setPhotos}
                     uploadFn={(file) => uploadImage(file, 'song')}
                  />
               </Form.Item>
            </Col>

            <Col span={24}>
               <Form.Item
                  name="lyrics"
                  label="Lyrics"
               >
                  {(
                     <ReactQuill
                        style={{ height: '250px' }}
                        theme="snow"
                        value={form.getFieldValue('lyrics')}
                        onChange={(value) => form.setFieldValue('lyrics', value)}
                     />
                  )}
               </Form.Item>
            </Col>
         </Row>
         <Form.Item style={{ marginTop: '50px' }}>
            <Button type="primary" htmlType="submit" block>
               Submit
            </Button>
         </Form.Item>

      </Form>
   )
}