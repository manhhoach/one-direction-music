import LinkSongName from "../components/LinkSongName";

export default function BackToAlbum({ albumSlug, albumName }) {
   return (
      <div className="w-full text-center" style={{ backgroundColor: '#c6c3b7' }}>
         <LinkSongName fontSize={'1.3rem'} href={`/music/albums/${albumSlug}`}>{albumName}</LinkSongName>
      </div>
   )
}