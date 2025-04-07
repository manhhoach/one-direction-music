export default function PanelHero() {
   return (
      <div className="w-full h-screen relative">
         <img
            src="/images/hero-2015-rect-med.jpg"
            alt="One Direction Band"
            className="w-full h-full object-cover object-center"
         />
         <div className="w-450 h-50 absolute bottom-30 left-1/2 transform -translate-x-1/2 flex items-center justify-center ">
            <img src="/images/hero-2015-logo.png" alt="One Direction" className="w-full h-full object-contain" />
         </div>
      </div>
   )
}