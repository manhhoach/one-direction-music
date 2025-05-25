import React, { useEffect, useState } from 'react';
import { Button, message, Modal } from 'antd';
import {
   getAlbums, createAlbum, deleteAlbum, updateAlbum
} from './../../../services/albumService'
import AlbumTable from './AlbumTable';
import AlbumForm from './AlbumForm';

export default function AlbumManager() {
   const [albums, setAlbums] = useState([]);
   const [loading, setLoading] = useState(false);
   const [selectedAlbum, setSelectedAlbum] = useState(null);
   const [isModalOpen, setIsModalOpen] = useState(false);

   const [pagination, setPagination] = useState({
      page: 1,
      pageSize: 10,
      total: 0,
   });

   const fetchAlbums = async (page = 1, pageSize = 10) => {
      setLoading(true);
      try {
         const res = await getAlbums();
         setAlbums(res.data.data);
         setPagination({
            page,
            pageSize,
            total: res.data.total || 0,
         });
      } catch (err) {
         message.error('Failed to fetch Albums');
      } finally {
         setLoading(false);
      }
   };

   useEffect(() => {
      fetchAlbums(pagination.page, pagination.pageSize);
   }, []);

   const handleSubmit = async (formData) => {
      try {
         if (selectedAlbum) {
            await updateAlbum(formData);
            message.success('Updated successfully');
         } else {
            await createAlbum(formData);
            message.success('Created successfully');
         }
         fetchAlbums(pagination.page, pagination.pageSize);
         setIsModalOpen(false);
      } catch (err) {
         message.error('Operation failed');
      }
   };

   const handleDelete = async (id) => {
      try {
         await deleteAlbum(id);
         message.success('Deleted successfully');
         fetchAlbums(pagination.page, pagination.pageSize);
      } catch {
         message.error('Delete failed');
      }
   };

   return (
      <div>
         <Button
            type="primary"
            style={{ marginBottom: 16 }}
            onClick={() => {
               setSelectedAlbum(null);
               setIsModalOpen(true);
            }}
         >
            Add Album
         </Button>

         <AlbumTable
            data={albums}
            loading={loading}
            pagination={pagination}
            onChangePage={fetchAlbums}
            onEdit={(album) => {
               setSelectedAlbum(album);
               setIsModalOpen(true);
            }}
            onDelete={handleDelete}
         />

         <Modal
            title={selectedAlbum ? 'Edit Album' : 'Add Album'}
            open={isModalOpen}
            onCancel={() => setIsModalOpen(false)}
            footer={null}
            destroyOnClose
            className='!w-1/2'
         >
            <AlbumForm
               initialValues={selectedAlbum}
               onSubmit={handleSubmit}
            />
         </Modal>
      </div>
   );
}
