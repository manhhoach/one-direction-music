import NetworkButton from "../components/NetworkButton"
import SocialIcon from '../components/SocialIcon'
import { useState, useEffect } from "react";
import combineUrl from './../utils/combineUrl'

export default function SingerIntro({ singer, i }) {
   const [index, setIndex] = useState(0);
   const isSwitched = i % 2 === 0;
   const handleScroll = (e) => {
      const scrollTop = window.scrollY; // Vị trí cuộn của cửa sổ
      const documentHeight = document.documentElement.scrollHeight; // Chiều cao toàn bộ trang
      const windowHeight = window.innerHeight; // Chiều cao của cửa sổ trình duyệt

      // Kiểm tra nếu đang ở đầu trang hoặc cuối trang
      const atTop = scrollTop === 0; // Đang ở đầu trang
      const atBottom = scrollTop + windowHeight >= documentHeight; // Đang ở cuối trang

      // Chỉ thay đổi ảnh nếu không ở đầu trang hoặc cuối trang
      if (!atTop && !atBottom) {
         setIndex((prev) => (prev + 1) % singer.images.length);
      }
   };
   useEffect(() => {
      window.addEventListener('wheel', handleScroll, { passive: true });
      return () => window.removeEventListener('wheel', handleScroll);
   }, [singer.images.length]);
   return (
      <div className={`w-full h-screen flex  ${isSwitched ? 'flex-row' : 'flex-row-reverse'}`}>
         <div className="w-1/2 h-full relative">
            {
               singer.images && singer.images.map((imgEle, i) => <img
                  className={`absolute top-0 left-0 w-[50vw] object-cover h-screen transition-opacity duration-100 
                     ${i === index ? 'opacity-100 z-100' : ' opacity-0 z-0'
                     }`}
                  src={combineUrl(imgEle)}
                  key={i}
                  alt={singer.name}
               />)
            }

         </div>

         <div className="w-1/2 flex flex-col justify-center items-center font-source-code-pro gap-10 px-5">
            <h2 className="text-9xl">{singer.name}</h2>
            <p className="w-5/6 text-2xl text-center leading-normal">{singer.description}</p>
            <div className="flex justify-center items-center gap-10">
               {singer?.networks.map((network) => (
                  <NetworkButton key={network.icon} href={network.link} target="_blank">
                     <SocialIcon size={40} icon={network.icon} />
                  </NetworkButton>
               ))}
            </div>
         </div>
      </div>
   );
}
