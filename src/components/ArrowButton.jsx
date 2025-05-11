import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";


export default function ArrowButton({ type, currentUrl, slug }) {
   const navigate = useNavigate();
   const IconComponent = type === 'left' ? AiOutlineLeft : AiOutlineRight;
   function redirectToSong(){
      const href = slug ? currentUrl.replace(/\/[^/]*$/, `/${slug}`) : '#';
      navigate(`${href}`);
   }
   return (
      <div onClick={redirectToSong} style={{ color: 'white', cursor: 'pointer' }}>
         <IconComponent size={100} style={{ transform: 'scaleY(1.8)' }}  />
      </div>
   )
}