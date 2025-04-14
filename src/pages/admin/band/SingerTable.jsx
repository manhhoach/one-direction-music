import React from 'react';
import { Table, Button, Popconfirm } from 'antd';

export default function SingerTable({ data, loading, pagination, onChangePage, onEdit, onDelete }) {
   const columns = [
      {
         title: 'Name',
         dataIndex: 'name',
      },
      {
         title: 'Description',
         dataIndex: 'description',
      },
      {
         title: 'Order',
         dataIndex: 'order',
      },
      {
         title: 'Actions',
         render: (_, record) => (
            <>
               <Button type="link" onClick={() => onEdit(record)}>Edit</Button>
               <Popconfirm
                  title="Are you sure to delete this singer?"
                  onConfirm={() => onDelete(record.id)}
               >
                  <Button type="link" danger>Delete</Button>
               </Popconfirm>
            </>
         ),
      },
   ];

   return (
      <Table
         rowKey="id"
         columns={columns}
         dataSource={data}
         loading={loading}
         pagination={{
            current: pagination.page,
            pageSize: pagination.pageSize,
            total: pagination.total,
            showSizeChanger: true,
            showQuickJumper: true,
         }}
         onChange={(pagination) => {
            onChangePage(pagination.current, pagination.pageSize);
         }}
      />
   );
}
