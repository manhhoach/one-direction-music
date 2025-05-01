import VideoModal from "../components/VideoModal";

export default function HomePageVideo() {

   return (
      <div className="w-full relative !bg-white">
         <img className="w-full object-contain" src="/images/img-home-page-video.jpg" alt="" />

         <div className="absolute top-0 left-0 w-full h-full flex">
            <div className="w-1/2 bg-white/30">
               <div className="w-full h-full flex items-center justify-center flex-col">
                  <div className='text-5xl uppercase text-black font-oswald text-center leading-normal'>
                     Watch One Direction’s<br />
                     History video now...
                  </div>
               </div>

            </div>
            <div className="w-1/2">
               <VideoModal url='https://www.youtube.com/embed/yjmp8CoZBIo?si=156qBQnzcOl3LHXe'></VideoModal>
            </div>
         </div>


      </div>
   );
}
