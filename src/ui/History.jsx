import CheckoutLink from './../components/CheckoutLink'

export default function History() {
   return (
      <div className="w-full flex flex-col items-center justify-center !bg-white pt-4 relative overflow-hidden pb-20">
         {/* Background decoration */}
         <div className='div-history top-10 absolute rounded-full w-300 h-300 !z-[-1] bg-cover bg-center' />

         {/* Header */}
         <h1 className="mt-10 text-times text-xl md:text-2xl lg:text-3xl">
            14th December 2015
         </h1>

         {/* Main image */}
         <img
            width={'25%'}
            height={'auto'}
            src="/images/history.png"
            alt="History album artwork"
            className="pt-10 pb-10 md:pb-30 relative w-1/2 md:w-1/3 lg:w-1/4"
         />

         {/* Content section - responsive layout */}
         <div className="w-11/12 md:w-2/3 flex flex-col md:flex-row justify-between items-center relative mb-10 gap-6 md:gap-6">
            {/* Text content */}
            <div className="flex flex-col justify-center items-center order-2 md:order-1">
               <div className="text-center font-source-code-pro text-lg md:text-[2rem] leading-tight">
                  One Direction's third UK single from
               </div>
               <div className="text-center font-source-code-pro text-lg md:text-[2rem] leading-tight">
                  Made in the A.M.
               </div>
            </div>

            {/* Album cover image */}
            <div className="order-1 md:order-2 w-48 md:w-auto">
               <img
                  className="w-full h-auto rounded-lg shadow-md"
                  src="/images/history.jpg"
                  alt="Made in the A.M. album cover"
               />
            </div>
         </div>

         {/* Call to action */}
         <CheckoutLink>
            Checkout the single
         </CheckoutLink>
      </div>
   )
}