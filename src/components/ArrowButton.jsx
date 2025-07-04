import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export default function ArrowButton({ type, onClick }) {
   const IconComponent = type === 'left' ? AiOutlineLeft : AiOutlineRight;
   const positionClass = type === 'left' ? 'left-0' : 'right-0';

   return (
      <div
         onClick={onClick}
         className={`absolute  ${positionClass} top-1/2 -translate-y-1/2 z-10 cursor-pointer text-white`}
      >
         <IconComponent
            className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[120px]"
            style={{ transform: 'scaleY(1.4)' }}
         />

      </div>
   );
}
