import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { SYSTEM_CONSTANTS } from "../../../utils/constants"
import { getSongs, deleteSong, createSong, updateSong } from "../../../services/songService"
import { Button, message, Modal } from "antd"
import SongTable from "./SongTable"
import SongForm from "./SongForm"

export default function SongManager() {
   const { albumId } = useParams()
   const [songs, setSongs] = useState([])
   const [loading, setLoading] = useState(false)
   const [selectedSong, setSelectedSong] = useState(null)
   const [isModalOpen, setIsModalOpen] = useState(false)


   const [pagination, setPagination] = useState({
      pageSize: SYSTEM_CONSTANTS.PageSize,
      pageNumber: SYSTEM_CONSTANTS.PageNumber,
   })

   const fetchSongs = async (pageNumber = SYSTEM_CONSTANTS.PageNumber, pageSize = SYSTEM_CONSTANTS.PageSize, filters = {}) => {
      setLoading(true)
      try {
         const params = {
            pageNumber,
            pageSize,
            ...filters,
         }
         const res = await getSongs(albumId, params)
         const { items, metaData } = res.data.data
         setSongs(items)
         setPagination({
            pageSize: metaData.pageSize,
            pageNumber: metaData.currentPage,
            total: metaData.totalCount
         })
      } catch (err) {
         message.error('Failed to fetch Songs');
      } finally {
         setLoading(false);
      }
   }

   const handleDelete = async (id) => {
      try {
         await deleteSong(id);
         message.success('Deleted successfully');
         fetchSongs(pagination.pageNumber, pagination.pageSize);
      } catch {
         message.error('Delete failed');
      }
   };

   const handleSubmit = async (formData) => {
      formData.albumId = albumId
      try {
         if (selectedSong) {
            await updateSong(selectedSong.id, formData);
            message.success('Updated successfully');
         } else {
            await createSong(formData);
            message.success('Created successfully');
         }
         fetchSongs(pagination.pageNumber, pagination.pageSize);
         setIsModalOpen(false);
      } catch (err) {
         message.error('Operation failed');
      }
   };


   useEffect(function () {
      fetchSongs(pagination.pageNumber, pagination.pageSize)
   }, [])

   return (<div>
      <Button
         type="primary"
         style={{ marginBottom: 16 }}
         onClick={() => {
            setSelectedSong(null);
            setIsModalOpen(true);
         }}
      >
         Add Song
      </Button>
      <SongTable
         data={songs}
         loading={loading}
         pagination={pagination}
         onChangePage={fetchSongs}
         onEdit={(song) => {
            setSelectedSong(song)
            setIsModalOpen(true)
         }}
         onDelete={handleDelete}
      >
      </SongTable>

      <Modal
         title={selectedSong ? "Edit Song" : "Add Song"}
         open={isModalOpen}
         onCancel={() => setIsModalOpen(false)}
         footer={null}
         destroyOnClose
         className="!w-2/3"
      >
         <SongForm initialValues={selectedSong} onSubmit={handleSubmit}></SongForm>
      </Modal>
   </div>)
}