import { Table, Button, Popconfirm } from 'antd';
import dayjs from 'dayjs';
import { useNavigate } from "react-router-dom";
import combineUrl from './../../../utils/combineUrl'

export default function AlbumTable({ data, loading, pagination, onChangePage, onEdit, onDelete }) {
   const navigate = useNavigate();

   const columns = [
      {
         title: 'Name',
         dataIndex: 'name',
      },
      {
         title: 'Description',
         dataIndex: 'description',
         width: '400px',

      },
      {
         title: 'Release Date',
         dataIndex: 'releaseDate',
         render: (releaseDate) => (
            <span>{dayjs(releaseDate).format('MM/DD/YYYY')}</span>
         )
      },
      {
         title: 'Image Cover',
         dataIndex: 'imageCover',
         width: '200px',
         render: (url) => (
            <img
               src={combineUrl(url)}
               alt="cover"
               style={{ width: '100%', height: 'auto', borderRadius: 4 }}
            />
         ),
      },
      {
         title: 'Image',
         dataIndex: 'image',
         width: '200px',
         render: (url) => (
            <img
               src={combineUrl(url)}
               alt="image"
               style={{ width: '100%', height: 'auto', borderRadius: 4 }}
            />
         ),
      },
      {
         title: 'Actions',
         render: (_, record) => {
            return (
               <>
                  <Button type="link" onClick={() => onEdit(record)}>Edit</Button>
                  <Button type="link" onClick={() => navigate(`/admin/song/${record.id}`)}>Manage song</Button>
                  <Popconfirm
                     title="Are you sure to delete?"
                     onConfirm={() => onDelete(record.id)}
                  >
                     <Button type="link" danger>Delete</Button>
                  </Popconfirm>
               </>
            )
         }
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
