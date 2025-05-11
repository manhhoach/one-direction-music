import { Link, useLocation, useParams } from "react-router-dom"
import { getAlbumBySlug } from "../services/albumService"
import NotFound from "../ui/NotFound"
import { useEffect, useState } from "react"
import NetworkButton from "../components/NetworkButton"
import SocialIcon from '../components/SocialIcon'
import SongList from "../components/SongList"
import combineUrl from './../utils/combineUrl'
import Loading from "../ui/Loading"

export default function AlbumDetail() {
   const { slug } = useParams()
   const [album, setAlbum] = useState({})
   const [isLoading, setIsLoading] = useState(true)
   const location = useLocation();
   const photosPath = `${location.pathname}/photos`;

   const fetchAlbum = async () => {
      try {
         const res = await getAlbumBySlug(slug);
         setAlbum(res.data.data)
      }
      catch {
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
         <div className='w-full relative' style={{ minHeight: '100vh' }}>
            <img
               src={combineUrl(album.imageCover)}
               alt=""
               className="absolute top-0 left-0 w-full h-full object-fit"
            />
            <p style={{
               textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6), -2px -2px 4px rgba(0, 0, 0, 0.6)'
            }} className="text-[12rem] text-white text-center relative uppercase font-black font-oswald pt-60">{album.name}
            </p>
         </div>
         <div className="w-full h-[800px] flex ">
            <div className="w-1/2 h-full flex items-center justify-center" style={{ backgroundColor: album.mainColor }}>
               <Link to={photosPath} className="link-style uppercase bold italic text-white text-center !text-5xl">Photos</Link>
            </div>
            <div className="w-1/2 h-full flex flex-col items-center gap-10" style={{ backgroundColor: '#ccc' }}>
               <p className="text-center text-xl font-times mt-5">{album.name}</p>
               <img src={combineUrl(album.image)} alt="" className="w-1/2 object-contain" />
               <div className="w-full flex justify-center items-center gap-10 mt-5">
                  {
                     album.linksToBuy && album.linksToBuy.map((link) => (
                        <NetworkButton key={link.icon} href={link.link} target="_blank">
                           <SocialIcon size={40} icon={link.icon} />
                        </NetworkButton>
                     ))
                  }
               </div>
            </div>
         </div>
         {
            album.songs && <SongList mainColor={album.mainColor} songs={album.songs} />
         }


      </>

   )
}