import { Modal } from "antd";
import { useState } from "react";
import { BiRightArrow } from "react-icons/bi";
import { CloseOutlined } from "@ant-design/icons";

export default function VideoModal({ url }) {
   const [isModalOpen, setIsModalOpen] = useState(false);

   return (
      <>
         <div
            onClick={() => setIsModalOpen(true)}
            className="cursor-pointer overflow-hidden w-full h-full flex items-center justify-center group relative transition-all duration-300 hover:bg-white/30"
         >
            <BiRightArrow
               color="white"
               className="w-20 h-20 sm:w-30 sm:h-30 lg:w-50 lg:h-50 group-hover:translate-x-full group-hover:opacity-0 transition-all duration-300"
            />
            <span
               className="absolute opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-black font-bold text-4xl sm:text-6xl lg:text-8xl cursor-pointer font-cousine"
            >
               Play
            </span>
         </div>
         <Modal
            open={isModalOpen}
            footer={null}
            onCancel={() => setIsModalOpen(false)}
            closeIcon={<div className="text-white text-3xl sm:text-4xl lg:text-5xl"><CloseOutlined /></div>}
            centered
            destroyOnClose
            className="modal-video"
            width="100%"
            maskProps={{ style: { backgroundColor: "rgba(0, 0, 0, 0.9)" } }}
            bodyProps={{
               style: {
                  height: "100vh",
                  padding: 0,
                  margin: 0,
                  backgroundColor: "black",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
               },
            }}
         >
            <iframe
               className="w-full max-w-[90%] h-[50vh] sm:h-[60vh] lg:h-[80vh]"
               src={url}
               title="YouTube video player"
               frameBorder="0"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
               referrerPolicy="strict-origin-when-cross-origin"
               allowFullScreen
            ></iframe>
         </Modal>
      </>
   );
}