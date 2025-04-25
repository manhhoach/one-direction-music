import React, { useEffect, useState } from 'react';
import { Select, Input, Button, Space, message } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { getNetworks } from './../services/commonService'

const SocialNetworkListInput = ({ value, onChange }) => {
   value = value ?? []
   const [networkOptions, setNetworkOptions] = useState([]);
   const [items, setItems] = useState(value);

   useEffect(() => {
      const fetchNetwork = async () => {
         try {
            const res = await getNetworks();
            setNetworkOptions(res.data.data);
         } catch (err) {
            message.error('Exception');
         }
      };
      fetchNetwork();
   }, []);

   const handleChange = (newItems) => {
      setItems(newItems);
      onChange?.(newItems); // gọi hàm cha nếu có
   };

   const addItem = () => {
      handleChange([...items, { icon: '', link: '' }]);
   };

   const removeItem = (index) => {
      const newItems = items.filter((_, i) => i !== index);
      handleChange(newItems);
   };

   const updateItem = (index, field, value) => {
      const newItems = [...items];
      newItems[index][field] = value;
      handleChange(newItems);
   };

   const getAvailableOptions = (currentIndex) => {
      const selectedIcons = items
         .map((item, index) => (index !== currentIndex ? item.icon : null))
         .filter(Boolean);
      return networkOptions.filter((opt) => !selectedIcons.includes(opt.value));
   };

   return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
         {items.map((item, index) => (
            <div
               key={index}
               style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  background: '#fafafa',
                  padding: '12px 16px',
                  border: '1px solid #f0f0f0',
                  borderRadius: 8,
               }}
            >
               <Select
                  style={{ width: 180 }}
                  placeholder="Social network"
                  options={getAvailableOptions(index)}
                  value={item.icon}
                  onChange={(val) => updateItem(index, 'icon', val)}
               />
               <Input
                  style={{ flex: 1 }}
                  placeholder="Link"
                  value={item.link}
                  onChange={(e) => updateItem(index, 'link', e.target.value)}
               />
               <MinusCircleOutlined
                  onClick={() => removeItem(index)}
                  style={{ color: '#ff4d4f', fontSize: 18, cursor: 'pointer' }}
               />
            </div>
         ))}

         <Button
            type="dashed"
            onClick={addItem}
            icon={<PlusOutlined />}
            block
            style={{ width: '100%' }}
         >
            Add
         </Button>
      </div>

   );
};

export default SocialNetworkListInput;
