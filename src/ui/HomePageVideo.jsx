import VideoModal from "../components/VideoModal";

export default function HomePageVideo() {
   return (
      <div className="w-full relative !bg-white">
         <img className="w-full object-contain" src="/images/img-home-page-video.jpg" alt="" />

         <div className="absolute top-0 left-0 w-full h-full flex flex-row">
            <div className="w-1/2 bg-white/30">
               <div className="w-full h-full flex items-center justify-center flex-col p-4">
                  <div className="text-2xl lg:text-5xl uppercase text-black font-oswald text-center leading-normal max-w-full">
                     Watch One Direction’s<br />
                     History video now...
                  </div>
               </div>
            </div>
            <div className="w-1/2 flex items-center justify-center">
               <VideoModal url="https://www.youtube.com/embed/yjmp8CoZBIo?si=156qBQnzcOl3LHXe"></VideoModal>
            </div>
         </div>
      </div>
   );
}