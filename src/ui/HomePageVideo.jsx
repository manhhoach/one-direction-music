import { useState } from 'react';
import { BiRightArrow } from 'react-icons/bi';

export default function HomePageVideo() {
   const [isModalOpen, setIsModalOpen] = useState(false)
   return (
      <div className="w-full relative !bg-white">
         <img className="w-full object-contain" src="/images/img-home-page-video.jpg" alt="" />

         <div className="absolute top-0 left-0 w-full h-full flex">
            <div className="w-1/2 bg-white/30">
               <div className="w-full flex items-center justify-center h-full flex-col">
                  <span className="text-5xl font-semibold text-black font-cousine">
                     Watch One Direction’s
                  </span>
                  <span className="text-5xl font-bold text-black font-cousine">
                     History video now...
                  </span>
               </div>

            </div>
            <div className="w-1/2">
               <div className='w-full flex items-center justify-center h-full'>
                  <BiRightArrow cursor={'pointer'} color='white' className='w-1/2 h-1/2' />
               </div>
            </div>
         </div>
      </div>
   );
}
