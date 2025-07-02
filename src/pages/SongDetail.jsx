import { useParams } from "react-router-dom";
import combineUrl from "../utils/combineUrl";
import { useEffect, useState } from "react";
import NotFound from "../ui/NotFound";
import { getSongBySlug } from "../services/songService";
import formatDate from "../utils/formatDate";
import ArrowButton from "../components/ArrowButton";
import { useLocation } from "react-router-dom";
import Loading from "../ui/Loading";
import LinkSongName from "../components/LinkSongName";
import { useNavigate } from "react-router-dom";
import BackToAlbum from "../ui/BackToAlbum";

export default function SongDetail() {
   const { songSlug, albumSlug } = useParams();
   const location = useLocation();
   const currentPath = location.pathname;
   const navigate = useNavigate();

   const [song, setSong] = useState(null)
   const [isLoading, setIsLoading] = useState(true)
   const fetchSong = async () => {
      try {
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
   }, [songSlug])

   if (isLoading) {
      return <Loading />
   }
   if (!song) {
      return <NotFound></NotFound>
   }



   function redirectToSong(slug) {
      if (slug) {
         const href = currentPath.replace(/\/[^/]*$/, `/${slug}`)
         navigate(href);
      }
   }

   return (
      <>
         <BackToAlbum>
            <LinkSongName fontSize={'1.2rem'} href={`/music/albums/${albumSlug}`}>{song.albumName}</LinkSongName>
         </BackToAlbum>
         <div className="w-full relative" style={{ minHeight: '100vh' }}>
            <img
               src={combineUrl(song.albumImageCover)}
               alt=""
               className="absolute top-0 left-0 w-full h-full object-fill"
               style={{ filter: 'grayscale(5%)', zIndex: -2 }}
            />
            <div
               className="absolute top-0 left-0 w-full h-full"
               style={{
                  backgroundColor: song.mainColor,
                  opacity: 0.5,
                  zIndex: -1
               }}
            ></div>
            <div className="relative text-white text-center flex justify-between mx-auto pt-50">
               <ArrowButton type={'left'} onClick={() => redirectToSong(song.prevSongSlug)} />
               <div className="w-9/10">

                  <h3 style={{
                     textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4), -2px -2px 4px rgba(0, 0, 0, 0.4)'
                  }} className="text-[6rem] font-bold font-oswald uppercase tracking-wide">
                     {song.name}
                  </h3>

               </div>
               <ArrowButton type={'right'} onClick={() => redirectToSong(song.nextSongSlug)} />
            </div>
            <div className="flex flex-col items-center justify-center gap-10 text-center text-white">
               {
                  song.releaseDate && (<div className="font-source-code-pro text-3xl">
                     <p className="uppercase">Release date</p>
                     <p>{formatDate(song.releaseDate)}</p>
                  </div>)
               }
               {
                  song.authors && (<div className="font-source-code-pro text-3xl w-4/5">
                     <p className="uppercase">Written by</p>
                     <div className="mx-auto">{song.authors}</div>
                  </div>)
               }
            </div>

         </div>
         {
            song.lyrics && (<div className="mt-5 mb-5">
               <p className="link-custom">Lyrics</p>
               <div className="text-center text-[1.5rem] font-times tracking-wide leading-normal" dangerouslySetInnerHTML={{ __html: song.lyrics }} />
            </div>)
         }

      </>

   );
}