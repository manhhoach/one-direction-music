import { useParams } from "react-router-dom";
import combineUrl from "../utils/combineUrl";
import { useEffect, useState } from "react";
import NotFound from "../ui/NotFound";
import { getSongBySlug } from "../services/songService";
import formatDate from "../utils/formatDate";
import ArrowButton from "../components/ArrowButton";
import { useLocation } from "react-router-dom";
import LinkSongName from "../components/LinkSongName";

export default function SongDetail() {
   const { songSlug } = useParams()
   const location = useLocation();
   const currentPath = location.pathname;

   const [song, setSong] = useState({})
   const [isLoading, setIsLoading] = useState(false)
   const fetchSong = async () => {
      try {
         setIsLoading(true)
         const res = await getSongBySlug(songSlug);
         setSong(res.data.data)
      }
      catch {
      }
      finally {
         setIsLoading(false)
      }
   }
   useEffect(function () {
      fetchSong()
   }, [])

   if (!song) {
      return <NotFound></NotFound>
   }
   return (
      <>
         <div className="w-full relative" style={{ minHeight: '100vh' }}>
            <img
               src={combineUrl(song.albumImageCover)}
               alt=""
               className="absolute top-0 left-0 w-full h-full object-fill"
               style={{ filter: 'grayscale(10%)', zIndex: -2 }}
            />
            <div
               className="absolute top-0 left-0 w-full h-full"
               style={{
                  backgroundColor: song.mainColor,
                  opacity: 0.5,
                  zIndex: -1
               }}
            ></div>
            <div className="relative text-white text-center flex items-center justify-between mx-auto">
               <ArrowButton type={'left'} currentUrl={currentPath} slug={song.prevSongSlug} />
               <div className="w-9/10">
                  <LinkSongName fontSize={'1.5rem'} href={currentPath.replace(`/songs/${songSlug}`, '')}>{song.albumName}</LinkSongName>
                  <h3 style={{
                     textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6), -2px -2px 4px rgba(0, 0, 0, 0.6)'
                  }} className="text-[6rem] font-bold font-cousine uppercase tracking-wide mt-50 mb-5">
                     {song.name}
                  </h3>
                  <div className="flex flex-col items-center gap-10">
                     {
                        song.releaseDate && (<div className="font-source-code-pro text-3xl">
                           <p className="uppercase">Release date</p>
                           <p>{formatDate(song.releaseDate)}</p>
                        </div>)
                     }
                     {
                        song.authors && (<div className="font-source-code-pro text-3xl">
                           <p className="uppercase">Written by</p>
                           <div className="mx-auto w-9/10">{song.authors}</div>
                        </div>)
                     }
                  </div>
               </div>
               <ArrowButton type={'right'} currentUrl={currentPath} slug={song.nextSongSlug} />
            </div>

         </div>
         <div className="mt-5 mb-5">
            <p className="link-custom mb-5">Lyrics</p>
            <div className="text-center text-3xl font-times tracking-wide leading-relaxed" dangerouslySetInnerHTML={{ __html: song.lyrics }} />
         </div>
      </>

   );
}