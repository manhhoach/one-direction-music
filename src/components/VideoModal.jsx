import { Modal } from "antd"
import { useState } from 'react';
import { BiRightArrow } from 'react-icons/bi';
import { CloseOutlined } from '@ant-design/icons';



export default function VideoModal({ url }) {
   const [isModalOpen, setIsModalOpen] = useState(false)
   return (<>
      <div onClick={() => setIsModalOpen(true)} className="cursor-pointer overflow-hidden w-full flex items-center justify-center h-full group relative transition-all duration-300 hover:bg-white/30">
         <BiRightArrow
            color="white"
            className="w-1/2 h-1/2 group-hover:translate-x-full group-hover:opacity-0 transition-all duration-300"
         />
         <span
            className="absolute opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-black font-bold text-[15rem] cursor-pointer font-cousine"
         >
            Play
         </span>
      </div>
      <Modal
         open={isModalOpen}
         footer={null}
         onCancel={() => { setIsModalOpen(false) }}
         closeIcon={<div className="text-white text-5xl">
            <CloseOutlined />
         </div>}
         centered
         destroyOnClose
         className="modal-video"
         width="100%"
         height="100%"
         style={{ top: 0, padding: 0, margin: 0, left: 0 }}
         maskProps={{ style: { backgroundColor: 'rgba(0, 0, 0, 0.9)' } }}
         bodyProps={{ style: { height: '100vh', padding: 0, margin: 0, backgroundColor: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center' } }}
      >
         <iframe width="90%" height="90%" src={url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

      </Modal>
   </>)
}