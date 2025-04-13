import CheckoutButton from '../components/CheckoutButton'

export default function History() {
   return (
      <div className="w-full flex flex-col items-center justify-center !bg-white pt-4 relative overflow-hidden pb-20">
         <div className='div-history top-10 absolute rounded-full w-300 h-300 !z-[-1] bg-cover bg-center'>

         </div>
         <h1 className="mt-10 text-times">14th December 2015</h1>
         <img width={'25%'} height={'auto'} src="/images/history.png" alt="" className="pt-10 pb-30 relative" />
         <div className="w-2/3 flex justify-between items-center relative mb-10">
            <div className="flex flex-col justify-center items-center">
               <div className="text-center font-source-code-pro text-[2rem]">
                  One Direction's third UK single from
               </div>
               <div className="text-center font-source-code-pro text-[2rem]">
                  Made in the A.M.
               </div>
            </div>
            <div>
               <img width={'100%'} src="/images/history.jpg" alt="" />
            </div>
         </div>
         <CheckoutButton>
            Checkout the single
         </CheckoutButton>
      </div>
   )
}