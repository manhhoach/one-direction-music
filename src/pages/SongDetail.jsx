import { useParams } from "react-router-dom";
import combineUrl from "../utils/combineUrl";
import { useEffect, useState } from "react";
import NotFound from "../ui/NotFound";
import { getSongBySlug } from "../services/songService";

export default function SongDetail() {
   const { songSlug } = useParams()
   const [song, setSong] = useState({})
   const [isLoading, setIsLoading] = useState(false)
   const fetchSong = async () => {
      try {
         setIsLoading(true)
         const res = await getSongBySlug(songSlug);
         setSong(res.data.data)
      }
      catch {
         // Handle error
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
      <div className="w-full relative" style={{ minHeight: '100vh' }}>
         <img
            src={combineUrl(song.album.imageCover)}
            alt=""
            className="absolute top-0 left-0 w-full h-full object-fit"
            style={{ filter: 'grayscale(100%)', zIndex: -2 }}
         />
         <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
               backgroundColor: song.album.mainColor,
               opacity: 0.65,
               zIndex: -1
            }}
         ></div>
         <div className="relative text-white text-center flex flex-col items-center justify-center py-24 px-10">
            <h3 className="text-[6rem] font-bold font-cousine uppercase tracking-wide mt-30">
               {song.name}
            </h3>

            <div className="flex flex-col items-center gap-5 mt-10">
               {
                  song.releaseDate && (<div className="font-source-code-pro text-2xl">
                     <p className="uppercase">Release date</p>
                     <p>{formatDate(song.releaseDate)}</p>
                  </div>)
               }
               {
                  song.authors && (<div className="font-source-code-pro text-2xl">
                     <p className="uppercase">Written by</p>
                     <p>{formatDate(song.authors)}</p>
                  </div>)
               }
            </div>
         </div>
      </div>
   );
}