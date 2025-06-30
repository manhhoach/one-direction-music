import { getAlbums } from './../services/albumService'
import AlbumIntro from '../ui/AlbumIntro'
import { useEffect, useState } from 'react'
import Loading from '../ui/Loading'

export default function Music() {
   const [albums, setAlbums] = useState([])
   const [isLoading, setIsLoading] = useState(true)
   const fetchAlbums = async () => {
      try {
         const res = getAlbums();
         setAlbums(res)
      }
      catch {

      }
      finally {
         setIsLoading(false)
      }
   }
   useEffect(function () {
      fetchAlbums()
   }, [])

   if (isLoading) {
      return <Loading />
   }

   return (
      <div className="w-full">
         {
            albums.length !== 0 && albums.map(album => <AlbumIntro key={album.id} album={album} />)
         }
      </div>
   );
}