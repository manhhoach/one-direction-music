import { useEffect, useState } from "react";
import Singer from "../components/Singer";
import { getAllSingers } from "../services/singerService";

export default function Band() {
   const [singers, setSingers] = useState([])
   const [isLoading, setIsLoading] = useState(false)
   const fetchSingers = async () => {
      try {
         setIsLoading(true)
         const res = await getAllSingers();
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
      <>
         {
            singers.length !== 0 && singers.map(singer => <Singer singer={singer} />)
         }
      </>
   );
}