import { Link, useLocation, useParams } from "react-router-dom"
import { getAlbumBySlug } from "../services/albumService"
import NotFound from "../ui/NotFound"
import { useEffect, useState } from "react"
import NetworkButton from "../components/NetworkButton"
import SocialIcon from '../components/SocialIcon'
import SongList from "../components/SongList"
import combineUrl from './../utils/combineUrl'
import Loading from "../ui/Loading"
import { message } from "antd"

export default function AlbumDetail() {
   const { slug } = useParams()
   const [album, setAlbum] = useState(null)
   const [isLoading, setIsLoading] = useState(true)
   const location = useLocation();
   const photosPath = `${location.pathname}/photos`;

   const fetchAlbum = async () => {
      try {
         const res = await getAlbumBySlug(slug);
         setAlbum(res.data.data)
      }
      catch {
         message.error('Failed to fetch data');
      }
      finally {
         setIsLoading(false)
      }
   }
   useEffect(function () {
      fetchAlbum()
   }, [])
   if (isLoading) {
      return <Loading />
   }
   if (!album) {
      return <NotFound></NotFound>
   }
   return (
      <>
         <div className="w-full relative min-h-screen square-mobile">
            <img
               src={combineUrl(album.imageCover)}
               alt=""
               className="absolute top-0 left-0 w-full h-full"
            />
            <p
               style={{
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6), -2px -2px 4px rgba(0, 0, 0, 0.6)'
               }}
               className="text-4xl sm:text-6xl md:text-[10rem] text-white text-center relative uppercase font-black font-oswald pt-20 sm:pt-36 md:pt-60 px-4"
            >
               {album.name}
            </p>
         </div>

         <div className="w-full h-auto md:h-[800px] flex flex-col md:flex-row">
            <div
               className="w-full md:w-1/2 h-60 md:h-full flex items-center justify-center"
               style={{ backgroundColor: album.mainColor }}
            >
               <Link
                  to={photosPath}
                  className="link-style uppercase font-bold italic text-white text-center text-2xl sm:text-3xl md:text-6xl px-6 py-4"
               >
                  Photos
               </Link>
            </div>

            <div
               className="w-full md:w-1/2 h-auto md:h-full flex flex-col items-center gap-6 md:gap-10 bg-gray-300 py-6 md:py-0"
            >
               <p className="text-center text-lg sm:text-xl md:text-2xl font-times mt-5 px-4">{album.name}</p>
               <img
                  src={combineUrl(album.image)}
                  alt=""
                  className="w-3/4 sm:w-1/2 object-contain"
               />
               <div className="w-full flex justify-center items-center gap-6 md:gap-10 mt-5 px-4 flex-wrap">
                  {album.linksToBuy &&
                     album.linksToBuy.map((link) => (
                        <NetworkButton key={link.icon} href={link.link} target="_blank">
                           <SocialIcon size={36} icon={link.icon} />
                        </NetworkButton>
                     ))}
               </div>
            </div>
         </div>

         {album.songs && <SongList mainColor={album.mainColor} songs={album.songs} />}
      </>
   );

}