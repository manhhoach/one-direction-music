export default function JournalArticle() {
   return (
      <div className="w-full flex flex-col items-center justify-center bg-white">
         <h1 className="mt-10 font-times text-lg sm:text-xl md:text-2xl text-center tracking-wide">
            23rd July 2020
         </h1>

         <div className="flex flex-col items-center justify-center pb-24">
            <span className="font-playfair text-[3rem] sm:text-[4rem] md:text-[5.5rem] leading-none text-center">
               #10YearsOf1D
            </span>

            <div className="w-[80%] sm:w-[70%] md:w-[60%] mt-16 mb-5">
               <img
                  src="/images/1D_Logotype_Black.jpg"
                  alt="Logo 1D"
                  className="w-full h-auto object-contain"
               />
            </div>

            <span className="font-source-code-pro text-base sm:text-lg md:text-2xl">
               Happy #10YearsOf1D Day!
            </span>
         </div>
      </div>
   );
}
