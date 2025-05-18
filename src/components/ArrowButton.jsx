import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";



export default function ArrowButton({ type, onClick }) {
   const IconComponent = type === 'left' ? AiOutlineLeft : AiOutlineRight;

   return (
      <div onClick={onClick} style={{ color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'end' }}>
         <IconComponent size={100} style={{ transform: 'scaleY(1.6)' }} />
      </div>
   )
}