import React from 'react';
import { Input, Button } from 'antd';
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';

const FanVideosInput = ({ value = [], onChange }) => {
   value = value ?? []
   const handleChange = (newList) => {
      onChange?.(newList);
   };

   const updateUrl = (index, newUrl) => {
      const updated = [...value];
      updated[index] = newUrl;
      handleChange(updated);
   };

   const removeUrl = (index) => {
      const filtered = value.filter((_, i) => i !== index);
      handleChange(filtered);
   };

   const addUrl = () => {
      handleChange([...value, '']);
   };

   return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
         {value && value.map((url, index) => (
            <div key={index} className="flex gap-2 items-center">
               <Input
                  value={url}
                  onChange={(e) => updateUrl(index, e.target.value)}
                  placeholder="Enter YouTube URL"
                  style={{ flex: 1 }}
               />
               <Button
                  icon={<MinusCircleOutlined />}
                  onClick={() => removeUrl(index)}
                  danger
               />
            </div>
         ))}
         <Button
            type="dashed"
            onClick={addUrl}
            icon={<PlusOutlined />}
            block
         >
            Add Fan Video
         </Button>
      </div>
   );
};

export default FanVideosInput;
