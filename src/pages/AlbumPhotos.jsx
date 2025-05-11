import { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom"
import { getAlbumPhotosBySlug } from "../services/albumService"
import Loading from "../ui/Loading"
import NotFound from "../ui/NotFound"
import LinkSongName from "./../components/LinkSongName"
import PhotoInAlbum from "../ui/PhotoInAlbum"

export default function AlbumPhotos() {
   const { slug } = useParams()
   const [album, setAlbum] = useState({})
   const [isLoading, setIsLoading] = useState(true)
   const location = useLocation();
   const currentPath = location.pathname;
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
   console.log(album)
   return (
      <div className="flex flex-col items-center justify-center w-full">
         <LinkSongName fontSize={'1.2rem'} href={currentPath.replace(`/photos`, '')}>{album.name}</LinkSongName>
         {
            album.songs && album.songs.map((song)=><PhotoInAlbum song={song} key={song.slug} />)
         }
      </div>
   )
}