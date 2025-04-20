import React, { useEffect, useState } from 'react';
import { Button, message, Modal } from 'antd';
import {
   getSingers,
   createSinger,
   updateSinger,
   deleteSinger,
} from '../../../services/singerService';
import SingerTable from './SingerTable';
import SingerForm from './SingerForm';

export default function BandManager() {
   const [singers, setSingers] = useState([]);
   const [loading, setLoading] = useState(false);
   const [selectedSinger, setSelectedSinger] = useState(null);
   const [isModalOpen, setIsModalOpen] = useState(false);

   const [pagination, setPagination] = useState({
      page: 1,
      pageSize: 10,
      total: 0,
   });

   const fetchSingers = async (page = 1, pageSize = 10) => {
      setLoading(true);
      try {
         const res = await getSingers();
         setSingers(res.data.data);
         setPagination({
            page,
            pageSize,
            total: res.data.total || 0,
         });
      } catch (err) {
         message.error('Failed to fetch singers');
      } finally {
         setLoading(false);
      }
   };

   useEffect(() => {
      fetchSingers(pagination.page, pagination.pageSize);
   }, []);

   const handleSubmit = async (formData) => {
      try {
         if (selectedSinger) {
            await updateSinger(selectedSinger.id, formData);
            message.success('Updated successfully');
         } else {
            await createSinger(formData);
            message.success('Created successfully');
         }
         fetchSingers(pagination.page, pagination.pageSize);
         setIsModalOpen(false);
      } catch (err) {
         message.error('Operation failed');
      }
   };

   const handleDelete = async (id) => {
      try {
         await deleteSinger(id);
         message.success('Deleted successfully');
         fetchSingers(pagination.page, pagination.pageSize);
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
               setSelectedSinger(null);
               setIsModalOpen(true);
            }}
         >
            Add Singer
         </Button>

         <SingerTable
            data={singers}
            loading={loading}
            pagination={pagination}
            onChangePage={fetchSingers}
            onEdit={(singer) => {
               setSelectedSinger(singer);
               setIsModalOpen(true);
            }}
            onDelete={handleDelete}
         />

         <Modal
            title={selectedSinger ? 'Edit Singer' : 'Add Singer'}
            open={isModalOpen}
            onCancel={() => setIsModalOpen(false)}
            footer={null}
            destroyOnClose
            width={'50vw'}
         >
            <SingerForm
               initialValues={selectedSinger}
               onSubmit={handleSubmit}
            />
         </Modal>
      </div>
   );
}
