import { Col, Row } from "antd";
import LinkSongName from "./LinkSongName";
import { useLocation } from "react-router-dom";
import trimEnd from "../utils/trimEnd";

export default function SongList({ songs, mainColor }) {
   const location = useLocation();
   const currentPath = location.pathname;

   const halfLength = Math.ceil(songs.length / 2);
   const firstList = songs.slice(0, halfLength);
   const secondList = songs.slice(halfLength);

   return (
      <div className="mb-10 text-center mt-10 px-4 sm:px-8 lg:px-16 ">
         <p className="link-custom">SONGS</p>
         {halfLength > 0 && (
            <Row gutter={[24, 24]}>
               <Col xs={24} sm={24} md={12}>
                  {firstList.map((song, index) => (
                     <SongItem key={index} currentPath={currentPath} song={song} mainColor={mainColor} />
                  ))}
               </Col>
               <Col xs={24} sm={24} md={12}>
                  {secondList.map((song, index) => (
                     <SongItem key={index} currentPath={currentPath} song={song} mainColor={mainColor} />
                  ))}
               </Col>
            </Row>
         )}
      </div>
   );
}

function SongItem({ song, currentPath, mainColor }) {
   return (
      <div>
         <LinkSongName
            mainColor={mainColor}
            href={`${trimEnd(currentPath, '/')}/songs/${song.slug}`}
         >
            {song.order}. {song.name} {song.isBonus ? '[Bonus Track]' : ''}
         </LinkSongName>
      </div>
   );
}
