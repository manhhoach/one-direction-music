import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getAlbumPhotosBySlug } from "../services/albumService"
import Loading from "../ui/Loading"
import NotFound from "../ui/NotFound"
import PhotoInAlbum from "../ui/PhotoInAlbum"

export default function AlbumPhotos() {
   const { slug } = useParams()
   const [album, setAlbum] = useState({})
   const [isLoading, setIsLoading] = useState(true)

   const fetchAlbum = async () => {
      try {
         const res = await getAlbumPhotosBySlug(slug);
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
      <div className="flex flex-col items-center justify-center w-full">
         {
            album.songs && album.songs.map((song) => <PhotoInAlbum song={song} albumName={album.name} key={song.slug} />)
         }
      </div>
   )
}