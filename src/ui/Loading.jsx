import { Spin } from 'antd';

export default function Loading() {
   return (
      <div style={{
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center',
         minHeight: '200px',
         width: '100%',
      }}>
         <Spin size="large" />
      </div>
   );
}