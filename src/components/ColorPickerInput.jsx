import { Popover } from 'antd';
import { SketchPicker } from 'react-color';
import { useState, useCallback } from 'react';

const ColorPickerInput = ({ value = '#ffffff', onChange }) => {
   const [visible, setVisible] = useState(false);

   const handleChange = useCallback(
      (color) => {
         // Kiểm tra color và color.hex một cách an toàn
         const hexColor = color?.hex || (color?.rgb ? color.hex : null);
         if (hexColor && typeof hexColor === 'string' && /^#[0-9A-Fa-f]{6}$/i.test(hexColor)) {
            onChange?.(hexColor);
            //setVisible(false); // Đóng Popover sau khi chọn màu hợp lệ
         }
      },
      [onChange]
   );

   const handleVisibleChange = useCallback((newVisible) => {
      setVisible(newVisible);
   }, []);

   return (
      <Popover
         content={<SketchPicker color={value} onChangeComplete={handleChange} />}
         trigger="click"
         open={visible}
         onOpenChange={handleVisibleChange}
      >
         <div
            className="w-8 h-8 rounded border border-gray-300 cursor-pointer hover:border-blue-500 transition-colors"
            style={{ backgroundColor: value || '#ffffff' }}
            title="Click to pick color"
         />
      </Popover>
   );
};

export default ColorPickerInput;