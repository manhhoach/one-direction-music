import { Upload, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

export default function ImageUpload({ fileList, handleUpload, handleRemove, maxFiles = 8 }) {
   return (
      <Upload
         customRequest={handleUpload}
         listType="picture-card"
         fileList={fileList}
         onRemove={handleRemove}
         multiple
         accept="image/*"
         showUploadList={{ showRemoveIcon: true }}
      >
         {fileList.length >= maxFiles ? null : (
            <div>
               <PlusOutlined />
               <div style={{ marginTop: 8 }}>Upload</div>
            </div>
         )}
      </Upload>
   );
}
