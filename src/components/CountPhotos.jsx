export default function CountPhotos({ value, hovered }) {
   return <div className={`count-photos ${hovered ? 'bg-white' : ''}`}>
      <span className={`count-value ${hovered ? '!text-black' : ''}`}>{value}</span>
   </div>
}