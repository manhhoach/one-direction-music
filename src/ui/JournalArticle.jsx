export default function JournalArticle() {
   return (
      <div className="w-full flex flex-col items-center justify-center !bg-white pt-5">
         <h1 className="text-3xl text-center font-times mt-10 underline">23rd July 2020</h1>
         <div className="flex flex-col items-center justify-center pb-25">
            <span className="article-intro">#10YearsOf1D</span>
            <div className="w-3/4 mt-15 mb-5">
               <img src="/images/1D_Logotype_Black.jpg" alt="Logo 1D" className="w-full h-full object-contain" />
            </div>
            <span className="font-source-code-pro text-2xl">Happy #10YearsOf1D Day!</span>
         </div>
      </div>
   )
}