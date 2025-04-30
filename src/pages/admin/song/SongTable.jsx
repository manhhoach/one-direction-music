import { Button, Popconfirm, Table } from "antd"
import dayjs from "dayjs"


export default function SongTable({ data, loading, pagination, onChangePage, onEdit, onDelete }) {
   const columns = [
      {
         title: 'Name',
         dataIndex: 'name',
      },
      {
         title: 'Authors',
         dataIndex: 'authors',
      },
      {
         title: 'Release Date',
         dataIndex: 'releaseDate',
         render: (releaseDate) => (
            <span>{dayjs(releaseDate).format('MM/DD/YYYY')}</span>
         )
      },
      {
         title: 'Actions',
         render: (_, record) => {
            return (
               <>
                  <Button type="link" onClick={() => onEdit(record)}>Edit</Button>
                  <Popconfirm
                     title="Are you sure to delete?"
                     onConfirm={() => onDelete(record.id)}
                  >
                     <Button type="link" danger>Delete</Button>
                  </Popconfirm>
               </>
            )
         }
      }
   ]
   return (
      <Table rowKey={'id'} columns={columns} dataSource={data} loading={loading}
         pagination={{
            pageSize: pagination.pageSize,
            current: pagination.pageNumber,
            total: pagination.total,
            showSizeChanger: true,
            showPrevNextJumpers: true,
            onChange: (pageNumber, pageSize) => {
               onChangePage(pageNumber, pageSize, {})
            },
         }}>

      </Table>
   )
}