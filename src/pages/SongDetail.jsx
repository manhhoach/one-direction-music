import { useParams } from "react-router-dom";
import combineUrl from "../utils/combineUrl";
import { useEffect, useState } from "react";
import NotFound from "../ui/NotFound";
import { getSongBySlug } from "../services/songService";
import formatDate from "../utils/formatDate";
import ArrowButton from "../components/ArrowButton";
import { useLocation } from "react-router-dom";
import Loading from "../ui/Loading";
import { useNavigate } from "react-router-dom";
import BackToAlbum from "../ui/BackToAlbum";
import { message } from "antd";

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
         message.error('Failed to fetch data');
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
         <BackToAlbum albumName={song.albumName} albumSlug={albumSlug}>
         </BackToAlbum>
         <div className="w-full relative min-h-screen square-mobile">
            <img
               src={combineUrl(song.albumImageCover)}
               alt=""
               className="absolute top-0 left-0 w-full h-full"
               style={{ filter: 'grayscale(5%)', zIndex: -2 }}
            />
            <div
               className="absolute top-0 left-0 w-full h-full"
               style={{
                  backgroundColor: song.mainColor,
                  opacity: 0.7,
                  zIndex: -1,
               }}
            ></div>

            <ArrowButton type="left" onClick={() => redirectToSong(song.prevSongSlug)} />
            <div className="relative w-8/10 mx-auto text-white text-center flex justify-center items-center pt-40">

               <div className="uppercase text-center">
                  <h3
                     style={{
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4), -2px -2px 4px rgba(0, 0, 0, 0.4)',
                     }}
                     className="text-5xl sm:text-5xl md:text-6xl lg:text-8xl font-bold font-oswald tracking-wide leading-tight"
                  >
                     {song.name}
                  </h3>
                  <div className="font-source-code-pro flex flex-col items-center justify-center gap-8 text-white mt-5 sm:px-8 md:px-16">
                     {song.releaseDate && (
                        <div className="text-lg sm:text-xl md:text-2xl max-w-3xl">
                           <p>Release date</p>
                           <p>{formatDate(song.releaseDate)}</p>
                        </div>
                     )}
                     {song.authors && (
                        <div className="text-lg sm:text-xl md:text-2xl max-w-3xl">
                           <p>Written by</p>
                           <div className="mx-auto">{song.authors}</div>
                        </div>
                     )}
                  </div>
               </div>

            </div>
            <ArrowButton type="right" onClick={() => redirectToSong(song.nextSongSlug)} />
         </div>

         {song.lyrics && (
            <div className="mt-8 mb-8 px-4 sm:px-8 md:px-16 max-w-4xl mx-auto">
               <p className="link-custom mb-4">Lyrics</p>
               <div
                  className="text-center text-base sm:text-lg md:text-2xl font-times tracking-wide leading-relaxed whitespace-pre-wrap"
                  dangerouslySetInnerHTML={{ __html: song.lyrics }}
               />
            </div>
         )}

      </>

   );
}