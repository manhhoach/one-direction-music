import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Loading from "../ui/Loading"
import NotFound from "../ui/NotFound"
import { getSongPhotosBySlug } from './../services/songService'
import combineUrl from "../utils/combineUrl"
import ArrowButton from './../components/ArrowButton'
import BackToAlbum from './../ui/BackToAlbum'

export default function SongPhotos() {
   const { songSlug, albumSlug } = useParams()
   const [song, setSong] = useState({})
   const [isLoading, setIsLoading] = useState(true)
   const [currentIndex, setCurrentIndex] = useState(0)

   const fetchSong = async () => {
      try {
         const res = await getSongPhotosBySlug(songSlug);
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
   if (isLoading) {
      return <Loading />
   }
   if (!song || !song.photos) {
      return <NotFound></NotFound>
   }
   const fullUrl = combineUrl(song.photos[currentIndex])
   function slideImage(type) {
      setCurrentIndex((prevIndex) => {
         if (type === 'incre') {
            return prevIndex < song.photos.length - 1 ? prevIndex + 1 : 0;
         } else {
            return prevIndex > 0 ? prevIndex - 1 : song.photos.length - 1;
         }
      });
   }

   return (
      <>
         <BackToAlbum albumName={'Back to album'} albumSlug={albumSlug}>
         </BackToAlbum>
         <div className='w-full relative h-screen' style={{ minHeight: '100vh' }}>
            <img
               src={fullUrl}
               alt=""
               className="absolute top-0 left-0 w-full h-full object-fit"
            />
            <div className="flex items-center justify-between h-full">
               <ArrowButton type={'left'} onClick={() => { slideImage('incre') }} />
               <ArrowButton type={'right'} onClick={() => { slideImage('decre') }} />
            </div>
         </div>
      </>

   )
}