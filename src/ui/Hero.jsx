export default function Hero() {
   return (
      <div className="w-full h-[50vh] md:h-screen relative">
         <img
            src="/images/hero-2015-rect-med.jpg"
            alt="One Direction Band"
            className="w-full h-full object-fit object-center"
         />

         <div className="absolute bottom-[20%] left-1/2 transform -translate-x-1/2 w-[60%] sm:w-[60%] md:w-[60%]">
            <img
               src="/images/hero-2015-logo.png"
               alt="One Direction"
               className="w-full"
            />
         </div>
      </div>
   );
}
