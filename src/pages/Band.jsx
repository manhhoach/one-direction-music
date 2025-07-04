import { useEffect, useState } from "react";
import SingerIntro from "./../ui/SingerIntro";
import { getSingers } from "../services/singerService";
import Loading from "../ui/Loading";
import { message } from "antd";

export default function Band() {
   const [singers, setSingers] = useState([])
   const [isLoading, setIsLoading] = useState(true)
   const fetchSingers = async () => {
      try {
         const res = await getSingers();
         setSingers(res.data.data)
      }
      catch {
         message.error('Failed to fetch data');
      }
      finally {
         setIsLoading(false)
      }
   }
   useEffect(function () {
      fetchSingers()
   }, [])

   if (isLoading) {
      return <Loading />
   }
   return (
      <div>
         {
            singers && singers.map((singer, i) => <SingerIntro i={i} key={singer.id} singer={singer} />)
         }
      </div>
   );
}