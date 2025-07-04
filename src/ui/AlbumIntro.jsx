import formatDate from './../utils/formatDate'
import FindOutMoreButton from './../components/FindOutMoreButton'
import combineUrl from './../utils/combineUrl'

export default function AlbumIntro({ album }) {
   return (
      <div className="w-full relative square-mobile min-h-screen">
         {/* Background Image */}
         <img
            src={combineUrl(album.imageCover)}
            alt=""
            className="absolute top-0 left-0 w-full h-full"
            style={{ filter: 'grayscale(100%)', zIndex: -2 }}
         />



         {/* Overlay Color */}
         <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
               backgroundColor: album.mainColor,
               opacity: 0.7,
               zIndex: -1
            }}
         ></div>

         {/* Main Content */}
         <div className="relative text-white text-center flex flex-col items-center justify-center px-4 py-20 sm:py-28 md:py-32 lg:py-40">
            <h3 className="text-4xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-bold font-oswald uppercase tracking-wide leading-tight">
               {album.name}
            </h3>

            <div className="flex flex-col items-center gap-5 mt-10">
               <div className="font-source-code-pro text-base sm:text-xl md:text-2xl">
                  <p className="uppercase">Release date</p>
                  <p>{formatDate(album.releaseDate)}</p>
               </div>

               <div className="text-base sm:text-xl md:text-2xl lg:text-3xl font-source-code-pro max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl px-4">
                  {album.description}
               </div>

               <FindOutMoreButton href={`/music/albums/${album.slug}`}>
                  Find out more
               </FindOutMoreButton>
            </div>
         </div>
      </div>
   );
}
