import CustomButton from './../components/CustomButton'

export default function History() {
   return (
      <div className="w-full h-full flex flex-col items-center justify-center !bg-white pt-4 relative">
         <div className="absolute w-[300px] h-[300px] rounded-full !bg-black -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
         <h1 className="text-3xl text-center font-times mt-10 underline">14th December 2015</h1>
         <img width={'25%'} height={'auto'} src="/images/history.png" alt="" className="pt-10 pb-30" />
         <div className="w-2/3 flex justify-between items-center">
            <div className="flex flex-col justify-center items-center">
               <div className="text-center font-cousine text-[2rem]">
                  One Direction's third UK single from
               </div>
               <div className="text-center font-cousine text-[2rem]">
                  Made in the A.M.
               </div>
            </div>
            <div>
               <img width={'100%'} src="/images/history.jpg" alt="" />
            </div>
         </div>
         <CustomButton />
      </div>
   )
}