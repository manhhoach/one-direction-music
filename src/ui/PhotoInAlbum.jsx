import combineUrl from '../utils/combineUrl'


export default function PhotoInAlbum({ song }) {
   return (
      <div className='w-full relative' style={{ minHeight: '100vh' }}>
         <img
            src={combineUrl(song.firstImage)}
            alt=""
            className="absolute top-0 left-0 w-full h-full object-fit"
         />
         <p className="text-6xl text-white text-center relative font-black font-source-code-pro pt-60">{song.name}
         </p>
      </div>
   )
}