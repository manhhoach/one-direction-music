import LinkSongName from "../components/LinkSongName";

export default function BackToAlbum({ albumSlug, albumName }) {
   return (
      <div className="w-full h-10 text-center" style={{ backgroundColor: '#c6c3b7' }}>
         <LinkSongName fontSize={'1.2rem'} href={`/music/albums/${albumSlug}`}>{albumName}</LinkSongName>
      </div>
   )
}