import formatDate from './../utils/formatDate'
import FindOutMoreButton from './../components/FindOutMoreButton'

export default function AlbumIntro({ album }) {
   console.log(album.mainColor)
   return (
      <div className='w-full relative h-screen'>
         <img src={album.imageCover} alt="" className="absolute top-0 left-0 w-full h-full object-fit" style={{ filter: 'grayscale(100%)' }} />
         <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
               backgroundColor: album.mainColor,
               opacity: 0.6,
            }}
         ></div>
         <div className="relative text-white text-center flex justify-start flex-col items-center h-full">

            <h3 className="text-8xl font-bold font-cousine uppercase tracking-widest mt-80">{album.name}</h3>

            <div className='flex flex-col items-center gap-15'>
               <div className="font-source-code-pro text-2xl">
                  <p className='uppercase'>Release date</p>
                  <p>{formatDate(album.releaseDate)}</p>
               </div>
               <div className='w-1/2 text-3xl font-source-code-pro'>
                  {album.description}
               </div>
               <div className=''>
                  <FindOutMoreButton href={`/music/albums/${album.slug}`}>Find out more</FindOutMoreButton>
               </div>
            </div>

         </div>
      </div>
   );
}
