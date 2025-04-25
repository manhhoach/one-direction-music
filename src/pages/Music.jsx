import { getAlbums } from './../services/albumService'
import AlbumIntro from '../ui/AlbumIntro'
import { useEffect, useState } from 'react'

export default function Music() {
   const [albums, setAlbums] = useState([])
   const [isLoading, setIsLoading] = useState(false)
   const fetchAlbums = async () => {
      try {
         setIsLoading(true)
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
   return (
      <div className="">
         {
            albums.length !== 0 && albums.map((album, i) => <AlbumIntro key={album.id} album={album} />)
         }
      </div>
   );
}