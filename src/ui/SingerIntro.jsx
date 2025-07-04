import NetworkButton from "../components/NetworkButton"
import SocialIcon from '../components/SocialIcon'
import { useState, useEffect } from "react";
import combineUrl from './../utils/combineUrl'

export default function SingerIntro({ singer, i }) {
   const [index, setIndex] = useState(0);
   const isSwitched = i % 2 === 0;

   const handleScroll = () => {
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
      <div
         className={`w-full flex flex-col md:flex-row ${isSwitched ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
      >
         {/* Left: Image Area */}
         <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative overflow-hidden">
            {singer.images &&
               singer.images.map((imgEle, i) => (
                  <img
                     key={i}
                     src={combineUrl(imgEle)}
                     alt={singer.name}
                     className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ${i === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                  />
               ))}
         </div>

         {/* Right: Content */}
         <div className="w-full md:w-1/2 flex flex-col justify-center items-center font-source-code-pro gap-6 px-4 py-10">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center">
               {singer.name}
            </h2>

            <p className="w-11/12 sm:w-5/6 text-base sm:text-lg md:text-xl text-center leading-relaxed">
               {singer.description}
            </p>

            <div className="flex justify-center items-center gap-6 flex-wrap">
               {singer?.networks.map((network) => (
                  <NetworkButton key={network.icon} href={network.link} target="_blank">
                     <SocialIcon size={36} icon={network.icon} />
                  </NetworkButton>
               ))}
            </div>
         </div>
      </div>

   );
}
