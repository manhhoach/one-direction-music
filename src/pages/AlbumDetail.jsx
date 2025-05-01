import { useParams } from "react-router-dom"

export default function AlbumDetail() {
   const { slug } = useParams()
   return (
      <div className="w-full h-screen flex justify-center items-center">
         <h1 className="text-5xl font-bold">Album Detail {slug}</h1>
      </div>
   )
}