import CheckoutButton from '../components/CheckoutButton'

export default function History() {
   return (
      <div className="w-full h-screen flex flex-col items-center justify-center !bg-white pt-4 relative overflow-hidden">
         <div className='div-history top-10 absolute rounded-full w-250 h-250 !z-[-1] bg-cover bg-center'>

         </div>
         <h1 className="text-3xl relative text-center font-times mt-10 underline">14th December 2015</h1>
         <img width={'25%'} height={'auto'} src="/images/history.png" alt="" className="pt-10 pb-30 relative" />
         <div className="w-2/3 flex justify-between items-center relative">
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