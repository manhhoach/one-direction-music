import { useParams } from "react-router-dom"
import { getAlbumBySlug } from "../services/albumService"
import NotFound from "../ui/NotFound"
import { useEffect, useState } from "react"
import FindOutMoreButton from "./../components/FindOutMoreButton"
import SocialIcon from './../components/SocialIcon'
import Video from "../components/Video"

export default function AlbumDetail() {
   const { slug } = useParams()
   const [album, setAlbum] = useState({})
   const [isLoading, setIsLoading] = useState(false)
   const fetchAlbum = async () => {
      try {
         setIsLoading(true)
         const res = await getAlbumBySlug(slug);
         setAlbum(res.data.data)
      }
      catch {
         // Handle error
      }
      finally {
         setIsLoading(false)
      }
   }
   useEffect(function () {
      fetchAlbum()
   }, [])

   if (!album) {
      return <NotFound></NotFound>
   }
   console.log(album)
   return (
      <>
         <div className='w-full relative h-screen'>
            <img src={album.imageCover} alt="" className="absolute top-0 left-0 w-full h-full object-fit" />
            <div className="relative text-white text-center flex justify-center flex-col items-center h-full">

               <span style={{
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6), -2px -2px 4px rgba(0, 0, 0, 0.6)'
               }} className="text-[12rem] uppercase font-black font-oswald">{album.name}</span>

            </div>
         </div>
         {/* <div className="w-full h-screen">
            {
               album.fanVideos?.map((video, index) => (
                  <div key={index} className="w-1/2 inline-block h-full">
                     <Video url={video}>

                     </Video>
                  </div>
               ))
            }
         </div> */}
      </>

   )
}