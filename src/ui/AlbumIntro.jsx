import formatDate from './../utils/formatDate'
import FindOutMoreButton from './../components/FindOutMoreButton'
import combineUrl from './../utils/combineUrl'

export default function AlbumIntro({ album }) {
   return (
      <div className="w-full relative" style={{ minHeight: '100vh' }}>
         <img
            src={combineUrl(album.imageCover)}
            alt=""
            className="absolute top-0 left-0 w-full h-full"
            style={{ filter: 'grayscale(100%)', zIndex: -2 }}
         />
         <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
               backgroundColor: album.mainColor,
               opacity: 0.6,
               zIndex: -1
            }}
         ></div>
         <div className="relative text-white text-center flex flex-col items-center justify-center py-40">
            <h3 className="text-[6.5rem] font-bold font-oswald uppercase tracking-wide">
               {album.name}
            </h3>

            <div className="flex flex-col items-center gap-5 mt-10">
               <div className="font-source-code-pro text-2xl">
                  <p className="uppercase">Release date</p>
                  <p>{formatDate(album.releaseDate)}</p>
               </div>

               <div className="text-3xl font-source-code-pro max-w-4xl">
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
