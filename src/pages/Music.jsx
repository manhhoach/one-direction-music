import { getAlbums } from './../services/albumService'
import AlbumIntro from '../ui/AlbumIntro'
import { useEffect, useState } from 'react'
import Loading from '../ui/Loading'

export default function Music() {
   const [albums, setAlbums] = useState([])
   const [isLoading, setIsLoading] = useState(true)
   const fetchAlbums = async () => {
      try {
         const res = await getAlbums();
         setAlbums(res.data.data)
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
            albums.length !== 0 && albums.map((album, i) => <AlbumIntro key={album.id} album={album} />)
         }
      </div>
   );
}