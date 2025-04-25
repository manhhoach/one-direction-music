// ImageUpload.jsx
import { Upload, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useState } from 'react';

export default function ImageUpload({
   value = [], // tương tự fileList
   onChange,
   maxFiles = 8,
   uploadFn, // function upload thực tế
}) {
   const [loading, setLoading] = useState(false);

   const handleUpload = async ({ file, onSuccess, onError }) => {
      setLoading(true);
      try {
         const url = await uploadFn(file);
         const newFile = {
            uid: file.uid,
            name: file.name,
            status: 'done',
            url,
         };
         const updatedList = [...value, newFile];
         onChange?.(updatedList);
         onSuccess('ok');
      } catch (err) {
         message.error('Upload failed');
         onError?.(err);
      } finally {
         setLoading(false);
      }
   };

   const handleRemove = (file) => {
      const updatedList = value.filter((item) => item.uid !== file.uid);
      onChange?.(updatedList);
   };

   return (
      <Upload
         customRequest={handleUpload}
         listType="picture-card"
         fileList={value}
         onRemove={handleRemove}
         multiple
         accept="image/*"
         showUploadList={{ showRemoveIcon: true }}
      >
         {value.length >= maxFiles ? null : (
            <div>
               <PlusOutlined />
               <div style={{ marginTop: 8 }}>{loading ? 'Uploading...' : 'Upload'}</div>
            </div>
         )}
      </Upload>
   );
}
