import { Col, Row } from "antd";
import LinkSongName from "./LinkSongName";
import { useLocation } from "react-router-dom";

export default function SongList({ songs }) {
   const location = useLocation();
   const currentPath = location.pathname;

   const halfLength = Math.ceil(songs.length / 2);
   const firstList = songs.slice(0, halfLength);
   const secondList = songs.slice(halfLength);

   return (
      <div className="mb-10 mt-10">
         <p className="link-custom mb-10">SONGS</p>
         <div>
            {halfLength > 0 &&
               <Row>
                  <Col span={12}>
                     <div className="text-center">
                        {firstList.map((song, index) => (
                           <SongItem key={index} currentPath={currentPath} song={song} />
                        ))}
                     </div>

                  </Col>
                  <Col span={12}>
                     <div className="text-center">
                        {secondList.map((song, index) => (
                           <SongItem key={index} currentPath={currentPath} song={song} />
                        ))}
                     </div>
                  </Col>
               </Row>}
         </div>
      </div>
   )
}

function SongItem({ song, currentPath }) {
   return (
      <div>
         <LinkSongName href={`${currentPath}/${song.slug}`}>{song.order}. {song.name} {song.isBonus ? '[Bonus Track]' : ''}</LinkSongName>
      </div>
   )
}