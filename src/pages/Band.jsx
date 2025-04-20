import { useEffect, useState } from "react";
import SingerIntro from "../components/SingerIntro";
import { getSingers } from "../services/singerService";

export default function Band() {
   const [singers, setSingers] = useState([])
   const [isLoading, setIsLoading] = useState(false)
   const fetchSingers = async () => {
      try {
         setIsLoading(true)
         const res = await getSingers();
         setSingers(res.data.data)
      }
      catch {

      }
      finally {
         setIsLoading(false)
      }
   }
   useEffect(function () {
      fetchSingers()
   }, [])
   return (
      <div className="">
         {
            singers.length !== 0 && singers.map((singer, i) => <SingerIntro i={i} key={singer.id} singer={singer} />)
         }
      </div>
   );
}