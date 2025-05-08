import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";


export default function ArrowButton({ type, currentUrl, slug }) {
   const IconComponent = type === 'left' ? AiOutlineLeft : AiOutlineRight;
   const href = slug ? currentUrl.replace(/\/[^/]*$/, `/${slug}`) : '#';
   return (
      <a href={href} style={{ color: 'white' }}>
         <IconComponent size={100} style={{ transform: 'scaleY(1.8)' }}  />
      </a>
   )
}