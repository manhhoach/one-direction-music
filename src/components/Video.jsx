import { useState } from 'react';
import { BiRightArrow } from 'react-icons/bi';
import { CloseOutlined } from '@ant-design/icons';

export default function Video({ url }) {
   const [isVideoVisible, setIsVideoVisible] = useState(false);

   // Toggle video visibility
   const toggleVideoVisibility = () => {
      setIsVideoVisible(!isVideoVisible);
   };

   return (
      <div className="relative w-full h-full">
         {/* Khu vực nhấn vào để mở video */}
         <div
            onClick={toggleVideoVisibility}
            className="cursor-pointer overflow-hidden w-full flex items-center justify-center h-full group relative transition-all duration-300 hover:bg-white/30"
         >
            <BiRightArrow
               color="white"
               className="w-1/2 h-1/2 group-hover:translate-x-full group-hover:opacity-0 transition-all duration-300"
            />
            <span className="absolute opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-black font-bold text-[15rem] cursor-pointer font-cousine">
               Play
            </span>
         </div>

         {/* Khi video được hiển thị, hiển thị iframe video */}
         {isVideoVisible && (
            <div
               className="absolute top-0 left-0 w-full h-full bg-black flex items-center justify-center z-50"
               style={{ display: isVideoVisible ? 'flex' : 'none' }}
            >
               <iframe width="90%" height="90%" src={url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

               {/* Nút đóng video */}
               <div
                  onClick={toggleVideoVisibility}
                  className="absolute top-4 right-4 text-white text-5xl cursor-pointer"
               >
                  <CloseOutlined />
               </div>
            </div>
         )}
      </div>
   );
}
