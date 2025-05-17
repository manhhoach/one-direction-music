import { useLocation } from 'react-router-dom';
import LinkSongName from '../components/LinkSongName'
import combineUrl from '../utils/combineUrl';
import CountPhotos from '../components/CountPhotos';
import FindOutMoreButton from './../components/FindOutMoreButton'

export default function PhotoInAlbum({ song, albumName }) {
   const location = useLocation();
   const currentPath = location.pathname;


   function handleMouseEnter() {
      console.log('enter')
   }

   function handleMouseLeave() {
      console.log('leave')
   }

   return (
      <div className='w-full relative h-screen' style={{ minHeight: '100vh' }}>
         <img
            src={combineUrl(song.firstImage)}
            alt=""
            className="absolute top-0 left-0 w-full h-full object-cover"
            style={{ filter: 'grayscale(90%)', zIndex: -2 }}
         />
         <div className='text-center'>
            <LinkSongName fontSize={'1.3rem'} color={'white'} mainColor={'white'} href={currentPath.replace(`/photos`, '')}>{albumName}</LinkSongName>
         </div>
         <div className='flex items-center justify-around h-100'>
            <CountPhotos value={song.count} />
            <p className="text-shadow-custom text-8xl text-white font-source-code-pro">{song.name} </p>
         </div>
         <div className='text-center'>
            <FindOutMoreButton onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
               View Images
            </FindOutMoreButton>
         </div>

      </div >
   )
}