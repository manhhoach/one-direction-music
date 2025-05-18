import { useLocation } from 'react-router-dom';
import LinkSongName from '../components/LinkSongName'
import combineUrl from '../utils/combineUrl';
import CountPhotos from '../components/CountPhotos';
import FindOutMoreButton from './../components/FindOutMoreButton'
import { useState } from 'react';

export default function PhotoInAlbum({ song, albumName }) {
   const location = useLocation();
   const currentPath = location.pathname;
   const [hovered, setHovered] = useState(false);
   const pathToSongPhotos = `${currentPath}/${song.slug}`

   function handleMouseEnter() {
      setHovered(true);
   }

   function handleMouseLeave() {
      setHovered(false);
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
         <div className={`container-photos text-center h-150 w-9/10 mx-auto ${hovered ? 'outline outline-white outline-[5px]' : ''}`}>
            <div className='flex items-center justify-center h-2/3 gap-50 pb-10'>
               <CountPhotos value={song.count} hovered={hovered} />
               <span className="text-shadow-custom text-8xl text-white font-source-code-pro">{song.name} </span>
            </div>
            <FindOutMoreButton href={pathToSongPhotos} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
               View Images
            </FindOutMoreButton>
         </div>

      </div >
   )
}